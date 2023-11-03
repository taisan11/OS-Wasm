import { blue, mes } from "../deps.ts";

function help(lang: string) {
  console.log(
    `all command help\n\n${blue("about")}:  ${mes[lang].abouthelp}\n\n${
      blue("updata")
    }: ${mes[lang].updatahelp}\n\n${blue("help")}: ${mes[lang].helphelp}`,
  );
}

export { help };
