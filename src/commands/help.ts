import { blue } from "@std/fmt/colors";
import {type texts} from "../i18n.ts"

function help(lang: string, subc: string[],mes:texts) {
  if (!subc[1]) {
    subc[1] = "1";
  }
  console.log(
    `${mes.help.pagenum(Number(subc[1]))}\nall command help
    ${blue("about")}:  ${mes.help.about}
    ${blue("updata")}: ${mes.help.updata}
    ${blue("help")}: ${mes.help.help}
    ${blue("run")}: ${mes.help.run}`,
  );
}

export { help };
