/// <reference types="react" />

import type { History as History_2 } from 'history';
import * as React_2 from 'react';

declare type AppClass = ObjClass | WidgetClass;

/** @public */
export declare class ArgumentError extends ScrivitoError {
    constructor(message: string);
}

declare interface AttrDict {
    [key: string]: AttributeValue | SystemAttributeValue;
}

declare type AttributeDefinitionOptionsMapping = {
    enum: {
        values: string[];
    };
    multienum: {
        values: string[];
    };
    reference: {
        only: string | string[];
    };
    referencelist: {
        only: string | string[];
    };
    widgetlist: {
        only: string | string[];
    };
};

declare interface AttributeEditingConfig {
    title?: string;
    description?: string;
    values?: LocalizedValue[];
    options?: AttributeEditingOptions;
}

declare interface AttributeEditingOptions {
    showHtmlSource?: boolean;
    toolbar?: ToolbarButton[];
}

declare interface AttributeMapping {
    binary: Binary | null;
    boolean: boolean;
    date: Date | null;
    datetime: Date | null;
    enum: string | null;
    float: number | null;
    integer: number | null;
    html: string;
    link: Link | null;
    linklist: Link[];
    multienum: string[];
    reference: Obj | null;
    referencelist: Obj[];
    string: string;
    stringlist: string[];
    widgetlist: Widget[];
}

declare interface AttributesEditingConfig {
    [attributeName: string]: AttributeEditingConfig;
}

declare type AttributeType = 'binary' | 'boolean' | 'date' | 'datetime' | 'enum' | 'float' | 'integer' | 'html' | 'link' | 'linklist' | 'multienum' | 'reference' | 'referencelist' | 'string' | 'stringlist' | 'widgetlist';

declare type AttributeTypesWithOptionalOptions = Exclude<AttributeType, AttributeTypeWithMandatoryOptions | AttributeTypesWithoutOptions>;

declare type AttributeTypesWithoutOptions = Exclude<AttributeType, keyof AttributeDefinitionOptionsMapping>;

declare type AttributeTypeWithMandatoryOptions = 'enum' | 'multienum';

declare type AttributeValidationCallback<T extends Obj | Widget> = (attributeValue: AttributeValue, options: T extends Obj ? ObjAttributeValidationCallbackParams : WidgetAttributeValidationCallbackParams) => ValidationResult;

declare type AttributeValidationConstraints = object | AttributeValidationConstraintsWithOptions;

declare type AttributeValidationConstraintsWithOptions = [
AttributeValidationOptions,
object
];

declare type AttributeValidationName = string;

declare interface AttributeValidationOptions {
    severity?: ValidationSeverityLevel;
}

declare type AttributeValidations<T extends Obj | Widget> = [
AttributeValidationName,
...Array<AttributeValidationConstraints | AttributeValidationCallback<T>>
];

declare type AttributeValue = Link | Link[] | Obj | Obj[] | Widget | Widget[] | Binary | boolean | Date | number | string | string[] | null;

declare type AttributeValue_2<Type extends AttributeType> = AttributeMapping[Type];

declare type AttributeValueFunction = () => AttributeValue;

declare interface AuthGroups {
    [groupId: string]: string;
}

declare type BackendSingleSearchValue = string | number | boolean | null;

declare type Background = PlainBackground | ScrivitoBackground;

/** @public */
export declare const BackgroundImageTag: React_2.ComponentType<BackgroundImageTagProps>;

declare interface BackgroundImageTagProps {
    tag?: string;
    style?: BackgroundImageTagStyle | string;
    [key: string]: unknown;
}

declare interface BackgroundImageTagStyle {
    background?: BackgroundOrBackgroundList;
    [key: string]: unknown;
}

declare type BackgroundOrBackgroundList = Background | Background[];

declare interface BackgroundProperties {
    attachment?: string;
    clip?: string;
    color?: string;
    origin?: string;
    position?: string;
    repeat?: string;
    size?: string;
}

declare type BaseUrlForSiteCallback = (siteId: string) => string | undefined;

/** @public */
export declare class Binary {
    static upload(source: Blob | File, options?: BinaryUploadOptions): FutureBinary;
    copy(options?: BinaryUploadOptions): FutureBinary;
    isPrivate(): boolean;
    optimizeFor(transformation: TransformationDefinition): Binary;
    original(): Binary;
    raw(): Binary;
    url(): string;
    filename(): string;
    metadata(): MetadataCollection;
    contentType(): string;
    contentLength(): number;
}

declare type BinaryMetadataValue = string | string[] | number | Date;

declare interface BinaryUploadOptions {
    filename?: string;
    contentType?: string;
}

/** @public */
export declare function canEdit(obj: Obj): boolean;

/** @public */
export declare function canWrite(): boolean;

/** @public */
export declare const ChildListTag: React_2.ComponentType<ChildListTagProps>;

declare type ChildListTagProps = React_2.HTMLAttributes<HTMLElement> & {
    parent?: Obj;
    tag?: string;
    renderChild?: RenderChild;
};

declare interface ClassicConfig {
    origin?: string;
    routingBasePath?: string;
    baseUrlForSite?: undefined;
    siteForUrl?: undefined;
}

declare interface ComponentGroupDescription {
    title: string;
    component: string;
    properties?: string[];
    key?: string;
}

declare interface Configuration {
    tenant: string;
    adoptUi?: boolean | string;
    baseUrlForSite?: SiteMappingConfiguration['baseUrlForSite'];
    endpoint?: string;
    constraintsValidation?: ConstraintsValidationCallback;
    homepage?: () => Obj | null;
    origin?: string;
    routingBasePath?: string;
    siteForUrl?: SiteMappingConfiguration['siteForUrl'];
    visitorAuthentication?: boolean;
    priority?: Priority;
    editorLanguage?: ForcedEditorLanguage;
    strictSearchOperators?: boolean;
    optimizedWidgetLoading?: boolean;
}

declare interface Configuration_2 {
    filters: FilterDefinition | FilterBuilder;
    baseFilter: {
        query?: ObjSearch;
    };
}

/** @public */
export declare function configure(configuration: Configuration): void;

/** @public */
export declare function configureContentBrowser(configuration: Partial<Configuration_2>): void;

/** @public */
export declare function configureObjClassForContentType(configuration: ObjClassForContentTypeMapping): void;

/** @public */
export declare function configurePreviewSizes(previewSizes: PreviewSize[]): void;

/** @public */
export declare function connect<Props>(component: React_2.FunctionComponent<Props>): React_2.FunctionComponent<Props>;

/** @public */
export declare function connect<Props>(component: React_2.ComponentClass<Props>): React_2.ComponentClass<Props>;

/** @public */
export declare function connect<Props>(component: React_2.ComponentType<Props>): React_2.ComponentType<Props>;

declare type ConstraintsValidationCallback = (constraints: object) => AttributeValidationCallback<Obj | Widget>;

declare interface ContentBrowserFilterDefinition {
    filters?: object;
}

/** @public */
export declare const ContentTag: React_2.ComponentType<ContentTagProps>;

declare interface ContentTagProps {
    tag?: string;
    content: Obj | Widget | null;
    attribute: string;
    widgetProps?: WidgetProps;
    [key: string]: unknown;
}

declare type ContentValidationCallback<T extends Obj | Widget> = (content: T) => ValidationResult;

declare interface ConvenienceObjClassDefinition {
    attributes?: CustomAttributesDefinition;
    extend?: ObjClass;
    extractTextAttributes?: string[];
    name?: string;
    onlyAsRoot?: boolean;
    onlyChildren?: string[] | string;
    onlyInside?: string[] | string;
    validAsRoot?: boolean;
}

declare interface ConvenienceWidgetClassDefinition {
    attributes?: CustomAttributesDefinition;
    extend?: WidgetClass;
    extractTextAttributes?: string[];
    name?: string;
    onlyChildren?: undefined;
    onlyInside?: string[] | string;
}

/** @public */
export declare function createObjClass(definition: ConvenienceObjClassDefinition): ObjClass;

/** @public */
export declare function createWidgetClass(definition: ConvenienceWidgetClassDefinition): WidgetClass;

/** @public */
export declare function currentEditor(): Editor | null;

/** @public */
export declare const CurrentPage: React_2.ComponentType<unknown>;

/** @public */
export declare function currentPage(): Obj | null;

/** @public */
export declare function currentPageParams(): QueryParameters;

/** @public */
export declare function currentSiteId(): string | null;

/** @public */
export declare function currentWorkspace(): Workspace;

/** @public */
export declare function currentWorkspaceId(): string;

declare type CustomAttributeDefinition = AttributeTypesWithoutOptions | AttributeTypesWithOptionalOptions | {
    [Type in keyof AttributeDefinitionOptionsMapping]: [
    Type,
    AttributeDefinitionOptionsMapping[Type]
    ];
}[keyof AttributeDefinitionOptionsMapping];

declare interface CustomAttributesDefinition {
    [attributeName: string]: CustomAttributeDefinition;
}

declare interface CustomMenuItem {
    id: string;
    description?: string;
    enabled?: boolean;
    group?: string;
    icon?: string;
    onClick?: () => void;
    position?: {
        after?: string;
        before?: string;
    };
    title?: string;
}

/** @public */
export declare interface CustomPageComponentProps {
    obj: Obj;
    page: Obj;
}

/** @public */
export declare interface CustomWidgetComponentProps {
    widget: Widget;
}

/** @public */
declare class Editor {
    id(): string;
    name(): string;
    teams(): Team[];
}

/** @public */
export declare function extendMenu(menuCallback: MenuCallback): void;

/** @public */
export declare function extractText(obj: Obj, options?: {
    length?: number;
}): string;

declare interface FacetQueryOptions {
    limit?: number;
    includeObjs?: number;
}

declare interface FieldBoost {
    [key: string]: number;
}

declare type FilterBuilder = (c: FilterContext) => FilterDefinition;

declare interface FilterContext {
    _validObjClasses?: string[];
}

declare type FilterDefinition = ContentBrowserFilterDefinition['filters'];

/** @public */
export declare function finishLoading(): Promise<void>;

declare type ForcedEditorLanguage = 'en' | 'de' | null;

declare type ForContentCallback<T extends Obj | Widget> = (content: T) => string;

declare type FullTextSearchOperator = 'contains' | 'containsPrefix' | 'matches';

/** @public */
export declare class FutureBinary {
    into(target: Obj): Promise<Binary>;
}

/** @public */
export declare function getClass(name: string): AppClass | null;

declare type Hash = string | null;

/** @public */
export declare const ImageTag: React_2.FunctionComponent<{
    [key: string]: unknown;
    attribute?: string | undefined;
    content?: Binary | Obj | null | undefined;
    width?: Width;
    onLoad?: React_2.ImgHTMLAttributes<HTMLImageElement>['onLoad'];
}>;

declare interface InitialContent {
    [attributeName: string]: AttributeValue | AttributeValueFunction;
}

declare type InitializeCallback<T extends Obj | Widget> = (instance: T) => void;

/** @public */
export declare const InPlaceEditingOff: React_2.SFC;

/** @public */
export declare function isComparisonActive(): boolean;

/** @public */
export declare function isEditorLoggedIn(): boolean;

/** @public */
export declare function isInPlaceEditingActive(): boolean;

/** @public */
export declare class Link {
    constructor(attributes: LinkAttributes);
    title(): string | null;
    query(): string | null;
    hash(): string | null;
    rel(): string | null;
    target(): string | null;
    url(): string | null;
    obj(): Obj | null;
    queryParameters(): QueryParameters;
    copy(attributes: LinkAttributes): Link;
    isExternal(): boolean;
    isInternal(): boolean;
}

declare interface LinkAttributes {
    hash?: string;
    obj?: Obj | null;
    query?: string;
    rel?: string;
    target?: string;
    title?: string;
    url?: string;
}

/** @public */
export declare const LinkTag: React_2.FunctionComponent<{
    [key: string]: unknown;
    to?: Obj | Link | null | undefined;
    target?: string | undefined;
    rel?: string | undefined;
    params?: false | QueryParameters | null | undefined;
    onClick?: ((e: React_2.MouseEvent<HTMLAnchorElement>) => void) | undefined;
    children?: React_2.ReactNode;
}>;

/** @public */
export declare function load<T>(loadableFunction: () => T): Promise<T>;

declare interface LocalizedValue {
    value: string;
    title: string;
}

declare interface MenuBuilder {
    insert(menuItem: CustomMenuItem): void;
    modify(menuItem: MenuItem): void;
    remove(menuItemId: string): void;
}

declare type MenuCallback = (menu: MenuBuilder) => void;

declare interface MenuItem {
    id: string;
    icon?: string;
    group?: string;
    position?: {
        after?: string;
        before?: string;
    };
    title?: string;
}

/** @public */
declare class MetadataCollection {
    get(key: string): BinaryMetadataValue | null;
}

declare type Modification = null | 'new' | 'edited' | 'deleted';

declare interface MultisiteConfig {
    baseUrlForSite: BaseUrlForSiteCallback;
    siteForUrl: SiteForUrlCallback;
}

/** @public */
export declare function navigateTo(target: Target | TargetFunction, options?: Options): void;

/** @public */
export declare const NotFoundErrorPage: React_2.ComponentType<NotFoundErrorPageProps>;

declare interface NotFoundErrorPageProps {
    children?: React_2.ReactNode;
}

/** @public */
export declare class Obj {
    static get(id: string): Obj | null;
    static getByPath(path: string): Obj | null;
    static getByPermalink(permalink: string): Obj | null;
    static all(): ObjSearch;
    static root(): Obj | null;
    static where(attribute: SearchField, operator: SearchOperator, value: SearchValue, boost?: FieldBoost): ObjSearch;
    static whereFullTextOf(attribute: SearchField, operator: FullTextSearchOperator, value: SearchValue, boost?: FieldBoost): ObjSearch;
    static create(attributes?: ObjAttributes): Obj;
    static createFromFile(file: File, attributes?: ObjAttributes): Promise<Obj>;
    static onAllSites(): SiteContext;
    static onSite(siteId: string): SiteContext;
    id(): string;
    objClass(): string;
    get<T extends AttributeType>(attributeName: string): AttributeValue_2<T>;
    update(attributes: Partial<AttrDict>): void;
    versionsOnAllSites(): Obj[];
    versionOnSite(siteId: string): Obj | null;
    createdAt(): Date | null;
    firstPublishedAt(): Date | null;
    publishedAt(): Date | null;
    lastChanged(): Date | null;
    path(): string | null;
    parent(): Obj | null;
    ancestors(): Array<Obj | null>;
    /**
     * Resolves when all previous updates have been persisted.
     * If an update fails the promise is rejected.
     */
    finishSaving(): Promise<void>;
    modification(): Modification;
    backlinks(): Obj[];
    children(): Obj[];
    permalink(): string | null;
    siteId(): string | null;
    language(): string | null;
    slug(): string;
    isBinary(): boolean;
    isRestricted(): boolean;
    contentLength(): number;
    contentType(): string;
    contentUrl(): string;
    contentId(): string;
    metadata(): MetadataCollection;
    restrict(): void;
    unrestrict(): void;
    updateReferences(mapping: ReferenceMapping): Promise<void>;
    widget(id: string): Widget | null;
    widgets(): Widget[];
    copy(): Promise<Obj>;
    destroy(): void;
}

declare type ObjAttributes = AttrDict;

declare interface ObjAttributeValidationCallbackParams {
    name: string;
    obj: Obj;
    content: Obj;
}

declare interface ObjClass {
    /** bogus constructor, to let TypeScript understand that this is a class. */
    new (dontUseThis: never): Obj;
    get(id: string): Obj | null;
    getByPath(path: string): Obj | null;
    getByPermalink(permalink: string): Obj | null;
    all(): ObjSearch;
    root(): Obj | null;
    where(attribute: SearchField, operator: SearchOperator, value: SearchValue, boost?: FieldBoost): ObjSearch;
    whereFullTextOf(attribute: SearchField, operator: FullTextSearchOperator, value: SearchValue, boost?: FieldBoost): ObjSearch;
    create(attributes?: ObjAttributes): Obj;
    createFromFile(file: File, attributes?: ObjAttributes): Promise<Obj>;
    onAllSites(): SiteContext;
    onSite(siteId: string): SiteContext;
}

declare interface ObjClassForContentTypeMapping {
    [key: string]: string | undefined;
}

/** @public */
export declare interface ObjEditingConfig extends SharedEditingConfig<Obj> {
    descriptionForContent?: ForContentCallback<Obj>;
    initializeCopy?: InitializeCallback<Obj>;
    thumbnailForContent?: (content: Obj) => Obj | Binary | undefined | null;
}

/** @public */
export declare class ObjFacetValue {
    name(): string;
    count(): number;
    includedObjs(): Obj[];
}

/** @public */
export declare class ObjSearch {
    and(field: SearchField, operator: SearchOperator, value: SearchValue, boost?: FieldBoost): this;
    andFullTextOf(field: SearchField, operator: FullTextSearchOperator, value: SearchValue, boost?: FieldBoost): this;
    andNot(field: SearchField, operator: SearchOperator, value: SearchValue): this;
    boost(field: SearchField, operator: SearchOperator, value: SearchValue, factor: number): this;
    facet(attribute: string, options?: FacetQueryOptions): ObjFacetValue[];
    suggest(prefix: string, options?: SuggestOptions): string[];
    first(): Obj | null;
    take(count?: number): Obj[];
    toArray(): Obj[];
    offset(offset: number): this;
    order(attribute: string, direction?: 'asc' | 'desc'): this;
    order(attributes: OrderAttributes): this;
    count(): number;
}

/** @public */
export declare function openDialog(name: string): void;

declare type Options = OptionsWithoutConvenienceParams | (QueryParameters & OptionsWithoutConvenienceParams);

declare interface OptionsWithoutConvenienceParams {
    hash?: Hash;
    params?: QueryParameters;
}

declare type OrderAttributes = Array<string | [string] | [string, 'asc' | 'desc' | undefined]>;

/** @public */
export declare interface PageComponentProps {
    page: Obj;
    params?: QueryParameters;
}

declare interface PlainBackground extends BackgroundProperties {
    image: string;
}

/**
 * tries to pre-warm the CMS cache using a preloadDump.
 * @public
 */
export declare function preload(preloadDump: string): Promise<{
    dumpLoaded: boolean;
}>;

declare interface PreviewSize {
    title: string;
    width?: number;
    description?: string;
    icon?: string;
}

declare type Priority = 'foreground' | 'background';

declare type PropertiesCallback<T extends Obj | Widget> = (content: T) => unknown;

declare interface PropertiesGroupDescription {
    title: string;
    properties: string[];
    key?: string;
}

declare type PropertiesGroupsCallback<T extends Obj | Widget> = (content: T) => unknown;

declare type PropertyGroup = ComponentGroupDescription | PropertiesGroupDescription;

/** @public */
export declare function provideAuthGroups(authGroups: AuthGroups): void;

/** @public */
export declare function provideComponent<P extends Partial<PageComponentProps> | Partial<WidgetComponentProps>>(className: string, component: React_2.ComponentType<P>): void;

/** @public */
export declare function provideEditingConfig(className: string, editingConfig: ObjEditingConfig): void;

/** @public */
export declare function provideEditingConfig(className: string, editingConfig: WidgetEditingConfig): void;

/** @public */
export declare function provideObjClass(name: string, definition: ConvenienceObjClassDefinition | ObjClass): ObjClass;

/** @public */
export declare function provideWidgetClass(name: string, definition: ConvenienceWidgetClassDefinition | WidgetClass): WidgetClass;

declare interface QueryParameters {
    [key: string]: string | null | Array<string | null>;
}

declare type ReferenceMapping = (refId: string) => string | undefined;

/** @public */
export declare function registerComponent<P extends Partial<CustomPageComponentProps> | Partial<CustomWidgetComponentProps>>(componentId: string, component: React_2.ComponentType<P>): void;

declare type RenderChild = (child: Obj) => React_2.ReactElement<{
    child: Obj;
}>;

/** @public */
export declare function renderPage<T>(obj: Obj, render: () => T): Promise<RenderResult<T>>;

declare interface RenderResult<T> {
    result: T;
    preloadDump: string;
}

/** @public */
export declare function resolveHtmlUrls(htmlString: string): string;

/** @public */
export declare const RestoreInPlaceEditing: React_2.SFC;

declare interface ScrivitoBackground extends BackgroundProperties {
    image: Obj | Binary | null | undefined;
}

/** @public */
export declare class ScrivitoError extends Error {
    __proto__?: Error;
    constructor(message?: string);
    get name(): string;
}

declare type SearchField = string | string[];

declare type SearchOperator = FullTextSearchOperator | 'equals' | 'startsWith' | 'isGreaterThan' | 'isLessThan' | 'linksTo' | 'refersTo';

declare type SearchValue = SingleSearchValue | SingleSearchValue[];

/** @public */
export declare function setVisitorIdToken(token: string): void;

declare interface SharedEditingConfig<T extends Obj | Widget> {
    attributes?: AttributesEditingConfig;
    description?: string;
    hideInSelectionDialogs?: boolean;
    initialContent?: InitialContent;
    properties?: string[] | PropertiesCallback<T>;
    propertiesGroups?: PropertyGroup[] | PropertiesGroupsCallback<T>;
    thumbnail?: string;
    title?: string;
    initialize?: InitializeCallback<T>;
    titleForContent?: ForContentCallback<T>;
    validations?: ValidationsConfig<T>;
}

declare type SingleSearchValue = BackendSingleSearchValue | Date | Obj;

declare interface SiteContext {
    create(params?: ObjAttributes): Obj;
    createFromFile(file: File, attributes?: ObjAttributes): Promise<Obj>;
    get(objId: string): Obj | null;
    getIncludingDeleted(objId: string): Obj | null;
    getByPath(path: string): Obj | null;
    getByPermalink(permalink: string): Obj | null;
    root(): Obj | null;
    all(): ObjSearch;
    where(fields: SearchField, operator: SearchOperator, value: SearchValue, boost?: FieldBoost): ObjSearch;
    whereFullTextOf(fields: SearchField, operator: FullTextSearchOperator, value: SearchValue, boost?: FieldBoost): ObjSearch;
}

declare type SiteForUrlCallback = (url: string) => SiteForUrlResult;

declare type SiteForUrlResult = {
    siteId: string;
    baseUrl: string;
} | undefined;

declare type SiteMappingConfiguration = ClassicConfig | MultisiteConfig;

declare interface SuggestOptions {
    attributes?: string[];
    limit?: number;
}

declare type SystemAttributeValue = string | null;

declare type Target = Obj | Link | null;

declare type TargetFunction = () => Target;

/** @public */
declare class Team {
    id(): string;
    name(): string;
    description(): string;
}

declare type ToolbarButton = 'blockquote' | 'bold' | 'bulletList' | 'clean' | 'code' | 'codeBlock' | 'header1' | 'header2' | 'header3' | 'header4' | 'header5' | 'header6' | 'indent' | 'italic' | 'link' | 'mark' | 'orderedList' | 'outdent' | 'strikethrough' | 'subscript' | 'superscript' | 'underline';

declare interface TransformationDefinition {
    height?: number;
    width?: number;
}

declare interface UiContext {
    theme: UiTheme;
}

/** @public */
export declare function uiContext(): UiContext | undefined;

declare type UiTheme = 'dark' | 'light';

/** @public */
export declare function updateContent(): void;

/** @public */
export declare function updateMenuExtensions(): void;

/** @public */
export declare function urlFor(target: Binary | Link | Obj, options?: UrlForOptions): string;

declare interface UrlForOptions {
    readonly query?: string;
    readonly hash?: string;
    readonly fragment?: string;
}

/** @public */
export declare function useHistory(historyToUse: History_2): void;

declare type ValidationResult = string | string[] | ValidationResultObject | false | null | undefined;

declare interface ValidationResultObject {
    message: string;
    severity?: ValidationSeverityLevel;
}

/** @public */
export declare function validationResultsFor(model: Obj | Widget, attributeName: string): ValidationResultObject[];

declare type ValidationsConfig<T extends Obj | Widget> = Array<ContentValidationCallback<T> | AttributeValidations<T>>;

declare type ValidationSeverityLevel = 'error' | 'warning' | 'info';

/** @public */
export declare class Widget {
    constructor(attributes?: AttrDict);
    id(): string;
    objClass(): string;
    get<T extends AttributeType>(attributeName: string): AttributeValue_2<T>;
    update(attributes: Partial<AttrDict>): void;
    obj(): Obj;
    copy(): Widget;
    destroy(): void;
    container(): Obj | Widget;
}

declare interface WidgetAttributeValidationCallbackParams {
    name: string;
    widget: Widget;
    content: Widget;
}

declare interface WidgetClass {
    new (attributes?: AttrDict): Widget;
}

/** @public */
export declare interface WidgetComponentProps {
    widget: Widget;
}

/** @public */
export declare interface WidgetEditingConfig extends SharedEditingConfig<Widget> {
}

declare interface WidgetProps {
    [key: string]: unknown;
}

/** @public */
export declare const WidgetTag: React_2.ComponentType<WidgetTagProps>;

declare type WidgetTagProps = React_2.HTMLAttributes<HTMLElement> & {
    tag?: string;
};

declare type Width = React_2.ImgHTMLAttributes<HTMLImageElement>['width'];

/** @public */
declare class Workspace {
    id(): string;
    title(): string;
}

export { }
