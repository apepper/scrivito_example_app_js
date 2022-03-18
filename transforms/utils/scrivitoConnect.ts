import type { Collection, Identifier, JSCodeshift } from "jscodeshift";
import type { namedTypes } from "ast-types/gen/namedTypes";

export function scrivitoConnect(
  j: JSCodeshift,
  collection: Collection<namedTypes.FunctionDeclaration>,
  // | Collection<namedTypes.VariableDeclaration>
  // | Collection<namedTypes.ClassDeclaration>,
  connectedName: Identifier
) {
  const node = collection.nodes()[0];
  const { comments } = node;
  node.comments = null;
  collection.replaceWith(
    j.variableDeclaration("const", [
      j.variableDeclarator(
        connectedName,
        j.callExpression(
          j.memberExpression(j.identifier("Scrivito"), j.identifier("connect")),
          [
            // TODO: add node here
          ]
        )
      ),
    ])
  );
  collection.nodes()[0].comments = comments;
}
