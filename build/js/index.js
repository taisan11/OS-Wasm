const { Deno: Deno1 } = globalThis;
const noColor = typeof Deno1?.noColor === "boolean" ? Deno1.noColor : false;
let enabled = !noColor;
function code(open, close) {
    return {
        open: `\x1b[${open.join(";")}m`,
        close: `\x1b[${close}m`,
        regexp: new RegExp(`\\x1b\\[${close}m`, "g")
    };
}
function run(str, code) {
    return enabled ? `${code.open}${str.replace(code.regexp, code.open)}${code.close}` : str;
}
function blue(str) {
    return run(str, code([
        34
    ], 39));
}
new RegExp([
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
].join("|"), "g");
function updata() {
    const updataTF = confirm("Do you want to update");
    if (updataTF === true) {
        console.log("updata");
    } else {
        console.log("cancel");
    }
}
function about() {
    console.log(`OS-Wasm ${blue("v0.0.1β")}\nBaseSystem: ${blue(Deno.build.os)}\nDeno: ${blue(Deno.version.deno)}\nV8: ${blue(Deno.version.v8)}\nTypeScript: ${blue(Deno.version.typescript)}\n`);
}
const commands = {
    about: about,
    updata: updata
};
console.log("press ctrl + c, will exit");
while(true){
    const commandName = prompt(">");
    if (commandName === null || commandName === "exit") {
        break;
    }
    const command = commands[commandName];
    if (command === undefined) {
        console.log("command not found");
        continue;
    } else {
        command();
    }
}
