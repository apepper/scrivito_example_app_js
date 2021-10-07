import { AttributesDefinition } from 'scrivito_sdk/realm/schema';
import { AttributeMapping } from 'scrivito_sdk/realm/wrap_in_app_class';

export type AttrDict<AttrsDef extends AttributesDefinition> = {
  [AttrName in keyof AttrsDef]: AttributeMapping[AttrsDef[AttrName][0]];
};

export type AttributeValue = AttributeMapping[keyof AttributeMapping];
