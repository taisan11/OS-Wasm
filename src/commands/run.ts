// deno-lint-ignore-file no-await-in-sync-fn
import { init, WASI } from "https://deno.land/x/wasm/wasi.ts";
function run() {
  await init();

  const wasi = new WASI({
    env: {},
    args: [],
  });

  const moduleBytes = fetch(
    "https://cdn.deno.land/wasm/versions/v1.0.2/raw/tests/demo.wasm",
  );
  const module = await WebAssembly.compileStreaming(moduleBytes);
  await wasi.instantiate(module, {});

  const exitCode = wasi.start();
  const stdout = wasi.getStdoutString();
  // This should print "hello world (exit code: 0)"
  console.log(`${stdout}(exit code: ${exitCode})`);
}
export { run };
