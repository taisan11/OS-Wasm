import {build} from "https://deno.land/x/esbuild@v0.24.2/mod.js";
import {denoPlugins} from "jsr:@luca/esbuild-deno-loader";


// await build({
//   entryPoints: ["./src/index.ts"],
//   bundle: true,
//   plugins: [...denoPlugins()],
//   outfile: "./dist/bundle.js",
//   minify: true,
//   format: "esm"
// });
// const buildCommand = new Deno.Command(
//     Deno.execPath(),
//     {
//         args: ["compile","-A","--node-modules-dir=auto","./dist/bundle.js","--include","./src/commands"],
//         stdin: "inherit",
//         stdout: "inherit",
//         stderr: "inherit",
//     },
// );
const buildCommand = new Deno.Command(
    Deno.execPath(),
    {
        args: ["compile","-A","--node-modules-dir=auto","./src/index.ts","--include"],
        stdin: "inherit",
        stdout: "inherit",
        stderr: "inherit",
    },
);
await buildCommand.spawn().output();
Deno.exit(0);