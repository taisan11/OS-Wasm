import { mes } from "../lang.ts";

async function dig(lang: string, subc: string[]) {
  const domainName = subc[1];
  if (!domainName) {
    console.log(mes[lang].Nosubcentered);
    return;
  }

  console.log(await Deno.resolveDns(domainName, "A"));
}

export { dig };
