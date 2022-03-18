import { Transform } from "jscodeshift";
import prettier from "prettier";
import type {
  Collection,
  JSCodeshift,
  Identifier,
  CallExpression,
} from "jscodeshift";
import type { DeclarationKind } from "ast-types/gen/kinds";
import type { namedTypes } from "ast-types/gen/namedTypes";
import { exportCollection } from "./utils/exportCollection";
import { findDeclaration } from "./utils/findDeclaration";
import { scrivitoConnect } from "./utils/scrivitoConnect";

const defaultToNamedExport: Transform = (
  fileInfo,
  { jscodeshift: j },
  options
) => {
  const root = j(fileInfo.source);

  const defaultConnectExport = root.find(j.ExportDefaultDeclaration, {
    type: "ExportDefaultDeclaration",
    declaration: {
      type: "CallExpression",
      callee: {
        type: "MemberExpression",
        object: {
          type: "Identifier",
          name: "Scrivito",
        },
        property: {
          type: "Identifier",
          name: "connect",
        },
      },
    },
  });

  if (defaultConnectExport.length === 1) {
    const defaultConnectDeclaration = defaultConnectExport.nodes()[0]
      .declaration as CallExpression;

    if (defaultConnectDeclaration.arguments.length === 1) {
      const connectedName = (
        defaultConnectDeclaration.arguments[0] as Identifier
      ).name;
      console.log("foo", connectedName);

      const unconnectedDeclaration = findDeclaration({
        root,
        j,
        identifierName: connectedName,
      });

      if (unconnectedDeclaration.length === 1) {
        scrivitoConnect(j, unconnectedDeclaration, connectedName);
      }

      // console.log("bar", unconnectedDeclaration.length);
    }
  }

  // console.log("foo", defaultConnectExport.nodes()[0]);

  // const identifierDefaultExport = root.find(j.ExportDefaultDeclaration, {
  //   type: "ExportDefaultDeclaration",
  //   declaration: { type: "Identifier" },
  // });

  // if (identifierDefaultExport.length === 0) {
  //   return;
  // }

  // const identifierName = (
  //   identifierDefaultExport.nodes()[0].declaration as Identifier
  // ).name;

  // console.log("I found this", fileInfo.path, identifierName);

  // const declaration = findDeclaration({ root, j, identifierName });
  // if (!declaration) return;

  // exportCollection(j, declaration);
  // identifierDefaultExport.remove();

  // // return changed source
  // return prettier.format(root.toSource(options.printOptions), {
  //   filepath: fileInfo.path,
  // });
};

export default defaultToNamedExport;
