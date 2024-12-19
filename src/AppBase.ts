import * as fs from "./AppAPI/fs.ts"

export class AppBase {
    private wasmInstance: WebAssembly.Instance | null = null;

    constructor(private wasmModuleUrl: string) {}

    async init() {
        const response = await fetch(this.wasmModuleUrl);
        const buffer = await response.arrayBuffer();
        const wasmModule = await WebAssembly.compile(buffer);
        this.wasmInstance = await WebAssembly.instantiate(wasmModule,{
            env: {
                abortStackOverflow: () => { throw new Error("overflow"); },
                table: new WebAssembly.Table({ initial: 0, element: "anyfunc" }),
                __table_base: 0,
                memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
                __memory_base: 1024,
                STACKTOP: 0,
                STACK_MAX: 524288,
            },
            call:{
                ...fs,
            }
        });
    }

    run() {
        if (this.wasmInstance) {
            // WebAssemblyのエクスポートされた関数を呼び出す例
            const exportedFunc = this.wasmInstance.exports.main as Function;
            exportedFunc();
        } else {
            console.error("WASM instance is not initialized.");
        }
    }
}