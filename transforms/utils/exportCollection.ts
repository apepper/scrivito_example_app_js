import type { Collection, JSCodeshift } from "jscodeshift";
import type { namedTypes } from "ast-types/gen/namedTypes";

export function exportCollection(
  j: JSCodeshift,
  collection:
    | Collection<namedTypes.FunctionDeclaration>
    | Collection<namedTypes.VariableDeclaration>
    | Collection<namedTypes.ClassDeclaration>
) {
  const node = collection.nodes()[0];
  const { comments } = node;
  node.comments = null;
  collection.replaceWith(j.exportNamedDeclaration(node));
  collection.nodes()[0].comments = comments;
}
