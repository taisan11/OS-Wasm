import { about, updata, mes } from "./deps.ts";

const commands: { [key: string]: () => void } = {
  about: about,
  updata: updata,
};
const lang = "en";
console.log(mes[lang].exitMessage);
while (true) {
  const commandName = prompt(">");
  if (commandName === null || commandName === "exit") {
    break;
  }
  const command = commands[commandName];
  if (command === undefined) {
    console.log(mes[lang].commandNotFound);
    continue;
  } else {
    command();
  }
}
// // console.log(confirm("message"))Yes or No
// console.log(format(1000000))// バイトをいい感じにするやつ
// console.log(Deno.memoryUsage())
// about()
