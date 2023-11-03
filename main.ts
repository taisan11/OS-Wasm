import { bundle } from "https://deno.land/x/emit@0.31.1/mod.ts";

const url = new URL(import.meta.resolve("./src/index.ts"));
const { code } = await bundle(url);
console.log(code);

Deno.writeTextFile("./build/js/index.js", code);

import * as esbuild from "https://deno.land/x/esbuild@v0.19.4/wasm.js";

const codea = await Deno.readTextFile("./build/js/index.js");

const result = await esbuild.transform(codea, {
  minify: true,
  format: "iife",
  charset: "utf8",
});

for (const warning of result.warnings) {
  console.warn(warning);
}

await Deno.writeTextFile("./build/index.min.js", result.code);

esbuild.stop();
