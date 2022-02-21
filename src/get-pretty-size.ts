import fs from "node:fs/promises";
import prettyBytes from "pretty-bytes";

export async function getPrettySize(filePath: string): Promise<string> {
  const { size } = await fs.stat(filePath);
  return prettyBytes(size);
}
