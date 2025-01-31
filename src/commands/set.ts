import { editSetting } from "../setting.ts";
import { texts } from "../i18n.ts";
import { bold, red } from "@std/fmt/colors";

function set(lang: string, subc: string[],mes:texts) {
  if (!subc[1]||!subc[2]) {
    console.log(mes.system.Nosubcentered);
    return;
  }
  editSetting(subc[1], subc[2]);
  console.log(red(bold(mes.system.Pleasereboot)));
}

export { set };
