import { Transform } from "jscodeshift";
import prettier from "prettier";
import type { Collection, JSCodeshift, Identifier } from "jscodeshift";
import type { DeclarationKind } from "ast-types/gen/kinds";
import type { namedTypes } from "ast-types/gen/namedTypes";
import { exportCollection } from "./utils/exportCollection";
import { findDeclaration } from "./utils/findDeclaration";

const defaultToNamedExport: Transform = (
  fileInfo,
  { jscodeshift: j },
  options
) => {
  const root = j(fileInfo.source);

  const identifierDefaultExport = root.find(j.ExportDefaultDeclaration, {
    type: "ExportDefaultDeclaration",
    declaration: { type: "Identifier" },
  });

  if (identifierDefaultExport.length === 0) {
    return;
  }

  const identifierName = (
    identifierDefaultExport.nodes()[0].declaration as Identifier
  ).name;

  console.log("I found this", fileInfo.path, identifierName);

  const declaration = findDeclaration({ root, j, identifierName });
  if (!declaration) return;

  exportCollection(j, declaration);
  identifierDefaultExport.remove();

  // return changed source
  return prettier.format(root.toSource(options.printOptions), {
    filepath: fileInfo.path,
  });
};

export default defaultToNamedExport;
