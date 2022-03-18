import type { Collection, JSCodeshift } from "jscodeshift";
import type { namedTypes } from "ast-types/gen/namedTypes";

export function findDeclaration({
  root,
  j,
  identifierName,
}: {
  root: Collection;
  j: JSCodeshift;
  identifierName: string;
}):
  | Collection<namedTypes.FunctionDeclaration>
  | Collection<namedTypes.VariableDeclaration>
  | Collection<namedTypes.ClassDeclaration>
  | null {
  const sameNameFunction = root.find(j.FunctionDeclaration, {
    type: "FunctionDeclaration",
    id: { type: "Identifier", name: identifierName },
  });
  if (sameNameFunction.length === 1) {
    return sameNameFunction;
  }

  const sameNameConst = root.find(j.VariableDeclaration, {
    type: "VariableDeclaration",
    declarations: [
      {
        type: "VariableDeclarator",
        id: { type: "Identifier", name: identifierName },
      },
    ],
  });
  if (sameNameConst.length === 1) {
    return sameNameConst;
  }

  const sameNameClass = root.find(j.ClassDeclaration, {
    type: "ClassDeclaration",
    id: { type: "Identifier", name: identifierName },
  });
  if (sameNameClass.length === 1) {
    return sameNameClass;
  }

  return null;
}
