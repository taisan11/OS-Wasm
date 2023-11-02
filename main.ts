import { bundle } from "https://deno.land/x/emit@0.31.1/mod.ts";

const url = new URL(import.meta.resolve("./src/index.ts"));
const { code } = await bundle(url);
console.log(code);

Deno.writeTextFile("./build/js/index.js", code);
