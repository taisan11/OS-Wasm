import { mes } from "../lang.ts";
import { blue } from "@std/fmt/colors";

function help(lang: string, subc: string[]) {
  if (subc[1] === undefined) {
    subc.splice(1, 1, "1");
  }
  console.log(
    `${mes[lang].page[subc[1]]}\nall command help\n\n${blue("about")}:  ${
      mes[lang].abouthelp
    }\n\n${blue("updata")}: ${mes[lang].updatahelp}\n\n${blue("help")}: ${
      mes[lang].helphelp
    }`,
  );
}

export { help };
