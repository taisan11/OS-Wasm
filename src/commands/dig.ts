import { type texts } from "../i18n.ts";

export async function dig(lang: string, subc: string[], mes: texts) {
  const domainName = subc[1];
  if (!domainName) {
    console.log(mes.system.Nosubcentered);
    return;
  }

  console.log(await Deno.resolveDns(domainName, "A"));
}