import { blue, mes } from "../deps.ts";

function dig(lang: string, subc: string[]) {
  const domainName = subc[1];
  if (!domainName) {
    console.log(mes[lang].Nosubcentered);
    return;
  }

  console.log(Deno.resolveDns(domainName, "A"));
}

export { dig };
