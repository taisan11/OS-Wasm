import {about} from "./commands/about.ts"
import {clear} from "./commands/clear.ts";
import { dig } from "./commands/dig.ts";
import { help } from "./commands/help.ts";
import { mes } from "./lang.ts";
import { readSetting } from "./setting.ts";
import { run } from "./commands/run.ts";
import { set } from "./commands/set.ts";
import { updata } from "./commands/updata.ts";

const commands: { [key: string]: (lang: string, subc: string[]) => void } = {
  about: about,
  updata: updata,
  help: help,
  set: set,
  clear: clear,
  dig: dig,
  run: run,
};
const setting = await readSetting();
console.log(setting);
const lang = setting.lang;
console.log(mes[lang].exitMessage);
while (true) {
  const commandName = prompt(">");
  if (commandName === "exit") {
    break;
  }
  if (commandName === null) {
    console.log(mes[lang].Nocommandentered);
    continue;
  }
  const subci = commandName.split(" ");
  // const subc = subci.shift();
  const command = commands[subci[0]];
  if (command === undefined) {
    console.log(mes[lang].commandNotFound);
    continue;
  } else {
    command(lang, subci);
  }
}
// // console.log(confirm("message"))Yes or No
// console.log(format(1000000))// バイトをいい感じにするやつ
// console.log(Deno.memoryUsage())
// about()
