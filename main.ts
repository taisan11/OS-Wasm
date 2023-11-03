import { bundle } from "https://deno.land/x/emit@0.31.1/mod.ts";

const url = new URL(import.meta.resolve("./src/index.ts"));
const { code } = await bundle(url);
console.log(code);

Deno.writeTextFile("./build/js/index.js", code);

import { GzipStream } from "https://deno.land/x/compress@v0.4.5/gzip/mod.ts";
const gzip = new GzipStream();
gzip.on("progress", (progress: string) => {
  console.log(progress); // 0.00% => 100.00%
});
await gzip.compress("./build/js/index.js", "./build/js/index.gz.js");
