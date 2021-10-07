import { AttributeType } from 'scrivito_sdk/models/basic_attribute_types';

export type AttributeTypeWithMandatoryOptions = 'enum' | 'multienum';

interface TypeOptionsMapping {
  enum: { values: string[] };
  multienum: { values: string[] };
  reference: { validClasses: string[] };
  referencelist: { validClasses: string[] };
  widgetlist: { validClasses: string[] };
}

export type TypeInfo<
  Type extends AttributeType
> = Type extends keyof TypeOptionsMapping ? TypeInfoWithOptions<Type> : [Type];

type TypeInfoWithOptions<
  Type extends keyof TypeOptionsMapping
> = Type extends AttributeTypeWithMandatoryOptions
  ? [Type, TypeOptionsMapping[Type]]
  : [Type, TypeOptionsMapping[Type]] | [Type];

export type ConvenienceTypeInfo<Type extends AttributeType> =
  | TypeInfo<Type>
  | Exclude<Type, AttributeTypeWithMandatoryOptions>;
