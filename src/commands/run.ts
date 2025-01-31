async function run(lang:string, subci: string[]) {
  const wasmfile = await Deno.readFile(new URL(`apps/${subci[1]}`, import.meta.url).href);
  // const wasmfile = await Deno.readFile(new URL("build/wasm/index.wasm", import.meta.url).href);
  const wasmModule = new WebAssembly.Module(wasmfile);
  const wasmInstance = new WebAssembly.Instance(wasmModule);
  const main = wasmInstance.exports.main as CallableFunction;
  console.log(main().toString());
}
export { run };
