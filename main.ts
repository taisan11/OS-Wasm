import { bundle } from "@deno/emit";

const url = new URL(import.meta.resolve("./src/index.ts"));
const { code } = await bundle(url);

Deno.writeTextFile("./build/js/index.js", code);