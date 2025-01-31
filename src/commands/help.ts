import { blue } from "@std/fmt/colors";
import {type texts} from "../i18n.ts"

function help(lang: string, subc: string[],mes:texts) {
  if (subc[1] === undefined) {
    subc.splice(1, 1, "1");
  }
  console.log(
    `${mes.help.pagenum(Number(subc[1]))}\nall command help\n\n${blue("about")}:  ${
      mes.help.about
    }\n\n${blue("updata")}: ${mes.help.updata}\n\n${blue("help")}: ${
      mes.help.help
    }`,
  );
}

export { help };
