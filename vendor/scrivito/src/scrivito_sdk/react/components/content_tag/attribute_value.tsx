import * as React from 'react';
import { isObject } from 'underscore';

import * as BrowserLocation from 'scrivito_sdk/app_support/browser_location';
import { openInNewWindow } from 'scrivito_sdk/app_support/change_location';
import { isComparisonActive } from 'scrivito_sdk/app_support/editing_context';
import {
  OpenInCurrentWindow,
  OpenInNewWindow,
  findClickTarget,
  isOpenInNewWindow,
} from 'scrivito_sdk/app_support/find_click_target';
import { getComparisonRange } from 'scrivito_sdk/app_support/get_comparison_range';
import { replaceInternalLinks } from 'scrivito_sdk/app_support/replace_internal_links';
import { registerScrollTarget } from 'scrivito_sdk/app_support/scroll_into_view';
import { uiAdapter } from 'scrivito_sdk/app_support/ui_adapter';
import { AttributeType, BasicField } from 'scrivito_sdk/models';
import { WidgetProps } from 'scrivito_sdk/react/components/content_tag/widget_content';
import { WidgetlistValue } from 'scrivito_sdk/react/components/content_tag/widgetlist_value';
import { connect } from 'scrivito_sdk/react/connect';
import { withDisplayName } from 'scrivito_sdk/react/with_display_name';

export interface AttributeValueProps<Type extends AttributeType> {
  customProps: {
    [key: string]: unknown;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    onClick?: <T>(e: React.MouseEvent<T>) => void;
  };
  field: BasicField<Type>;
  onClick?: <T>(e: React.MouseEvent<T>) => void;
  tag: string;
  widgetProps?: WidgetProps;
  elementCallback?: (element?: HTMLElement) => void;
}

export const AttributeValue = connect(
  withDisplayName(
    'Scrivito.ContentTag.AttributeValue',
    <Type extends AttributeType>(props: AttributeValueProps<Type>) => {
      const element = React.useRef<HTMLElement>();

      React.useEffect(() => {
        if (!element.current) return;
        const objId = props.field.obj().id();
        const attributeName = props.field.name();

        return registerScrollTarget({ objId, attributeName }, element.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.field.obj().id(), props.field.name(), element.current]);

      const {
        children: customChildrenFromProps,
        dangerouslySetInnerHTML: maybeCustomInnerHtml,
        onClick: customOnClick,
        ...customProps
      } = props.customProps;

      const renderProps = renderPropsForField(
        props.field,
        customChildrenFromProps,
        isCustomInnerHtml(maybeCustomInnerHtml)
          ? maybeCustomInnerHtml
          : undefined,
        customOnClick,
        props.widgetProps
      );

      const editingProps = props.onClick
        ? {
            onClick: props.onClick,
            'data-scrivito-is-clickable': true,
          }
        : {};

      return React.createElement(props.tag, {
        ...customProps,
        ...renderProps,
        ...editingProps,
        ref: (e?: HTMLElement) => {
          element.current = e;
          if (props.elementCallback) props.elementCallback(e);
        },
      });
    }
  )
);

interface CustomInnerHtml {
  __html: string;
}

function isCustomInnerHtml(
  maybeCustomInnerHtml: unknown
): maybeCustomInnerHtml is CustomInnerHtml {
  return (
    isObject(maybeCustomInnerHtml) &&
    typeof (maybeCustomInnerHtml as CustomInnerHtml).__html === 'string'
  );
}

function renderPropsForField(
  field: BasicField<AttributeType>,
  customChildrenFromProps: React.ReactNode | undefined,
  customInnerHtml: { __html: string } | undefined,
  customOnClick: (<T>(e: React.MouseEvent<T>) => void) | undefined,
  widgetProps: WidgetProps | undefined
): React.DOMAttributes<HTMLElement> {
  const customChildren =
    customChildrenFromProps || customInnerHtml
      ? {
          children: customChildrenFromProps,
          dangerouslySetInnerHTML: customInnerHtml
            ? { __html: replaceInternalLinks(customInnerHtml.__html) }
            : undefined,
        }
      : undefined;

  switch (field.type()) {
    case 'html':
      return renderPropsForHtml(
        field as BasicField<'html'>,
        customChildren,
        customOnClick
      );

    case 'string':
      return renderPropsForString(field, customChildren);

    case 'float':
    case 'integer':
      return customChildren ?? renderPropsForNumber(field);

    case 'widgetlist': {
      return {
        children: (
          <WidgetlistValue
            field={field as BasicField<'widgetlist'>}
            widgetProps={widgetProps}
          />
        ),
      };
    }

    default:
      return customChildren ?? {};
  }
}

function renderPropsForHtml(
  field: BasicField<'html'>,
  customChildren?: { children: React.ReactNode },
  customOnClick?: (e: React.MouseEvent) => unknown
) {
  const diffContent = isComparisonActive()
    ? field.getHtmlDiffContent(getComparisonRange())
    : undefined;

  if (customChildren && !diffContent) {
    return {
      ...customChildren,
      onClick: customOnClick || handleClickOnHtml,
    };
  }

  return {
    dangerouslySetInnerHTML: {
      __html: replaceInternalLinks(diffContent || field.get()),
    },
    onClick: handleClickOnHtml,
  };
}

function renderPropsForString(
  field: BasicField<AttributeType>,
  customChildren?: { children: React.ReactNode }
) {
  if (isComparisonActive()) {
    const diffContent = field.getHtmlDiffContent(getComparisonRange());

    if (diffContent) {
      return { dangerouslySetInnerHTML: { __html: diffContent } };
    }
  }

  return customChildren ?? { children: field.get() };
}

function renderPropsForNumber(field: BasicField<AttributeType>) {
  const value = field.get();
  const parsedValue = value === 0 ? '0' : value;

  return { children: parsedValue };
}

function handleClickOnHtml(e: React.MouseEvent<HTMLElement>) {
  const linkTarget = findClickTarget(e);

  if (!linkTarget) return;

  if (isOpenInNewWindow(linkTarget)) {
    handleOpenInNewWindow(e, linkTarget);
  } else {
    handleOpenInCurrentWindow(e, linkTarget);
  }
}

function handleOpenInNewWindow<T>(
  e: React.MouseEvent<T>,
  { openInNewWindow: url }: OpenInNewWindow
) {
  if (uiAdapter) {
    e.preventDefault();

    openInNewWindow(url);
  }
}

function handleOpenInCurrentWindow<T>(
  e: React.MouseEvent<T>,
  { openInCurrentWindow: resource }: OpenInCurrentWindow
) {
  e.preventDefault();

  BrowserLocation.push(resource);
}
