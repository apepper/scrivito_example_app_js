import { toHex } from "@aws-sdk/util-hex-encoding";

export function random32CharHex() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return toHex(array);
}
