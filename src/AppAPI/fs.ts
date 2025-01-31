import { ensureDir } from "@std/fs";
import { dirname, join, normalize } from "@std/path";

export async function read(path: string, AppID: string) {
  const sandboxedPath = Bpath(path, AppID);
  return await Deno.readFile(sandboxedPath);
}

export async function write(path: string, AppID: string, data: Uint8Array) {
  const sandboxedPath = Bpath(path, AppID);
  await ensureDir(dirname(sandboxedPath));
  return await Deno.writeFile(sandboxedPath, data, { create: true });
}

function Bpath(path: string, AppID: string) {
  const basePath = join("./sandbox", AppID);
  const normalizedPath = normalize(join(basePath, path));
  // サンドボックス外へのアクセスを防止
  if (!normalizedPath.startsWith(basePath)) {
    throw new Error("Invalid path: Access outside of sandbox is not allowed");
  }
  return normalizedPath;
}
