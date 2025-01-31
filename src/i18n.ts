import { type Setting } from "./setting.ts";

export function langcode(setting: Setting): string {
  return setting.lang || navigator.language || "en-US";
}

export async function loadTexts(lang: string): Promise<texts> {
  return (await import(`./i18n/${lang}.ts`)).default;
}

export interface texts {
  system: {
    exitMessage: string;
    commandNotFound: string;
    Nocommandentered: string;
    Nosubcentered: string;
    Pleasereboot: string;
  };
  help: {
    pagenum: (page: number) => string;
    about: string;
    updata: string;
    help: string;
    run: string;
  };
}
