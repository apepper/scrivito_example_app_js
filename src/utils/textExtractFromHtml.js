import decode from "ent/decode";
import { decodeHTML } from "entities/lib/decode";
import heDecode from "he";

import isWhitespaceCharacter from "is-whitespace-character";

import locutus from "locutus/php/strings/strip_tags";
import striptags from "striptags";
// import { decodeHTML } from "entities";
import stripHtml from "string-strip-html";

function textExtractFromHtml(html) {
  return decodeHTML(striptags(html));
}

export default textExtractFromHtml;
