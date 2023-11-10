import { about, help, mes, readSetting, updata } from "./deps.ts";

const commands: { [key: string]: (lang: string, subc: string[]) => void } = {
  about: about,
  updata: updata,
  help: help,
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
