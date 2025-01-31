// import { mes } from "./lang.ts";
import { langcode,loadTexts } from "./i18n.ts";
import { readSetting } from "./setting.ts";
import { commandLoader,cmd } from "./command_loader.ts";
// const commands = await commandLoader();
const setting = await readSetting();
const lang = langcode(setting);
const mes = await loadTexts(lang);
console.debug(setting);
while (true) {
  const commandName = prompt(">");
  if (commandName == "exit") {
    console.log(mes.system.exitMessage);
    break;
  }
  if (commandName == null) {
    console.log(mes.system.Nocommandentered);
    continue;
  }
  const subci = commandName.split(" ");
  // const subc = subci.shift();
  // const command = commands.get(subci[0]);
  const command = await cmd(subci[0]);
  if (command == undefined) {
    console.log(mes.system.commandNotFound);
    continue;
  } else {
    await command(lang, subci, mes);
  }
}
