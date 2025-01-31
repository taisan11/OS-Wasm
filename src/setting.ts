import { ensureDir, exists } from "@std/fs";

export interface Setting {
  lang?: string;
  [key: string]: string | undefined;
}

const settingPath = "./setting.json";
if (!(await exists(settingPath))) {
  await ensureDir("./");
  const syokiSetting: string = `{"lang":"${navigator.language}"}`;
  await Deno.writeTextFile(settingPath, syokiSetting);
}

export async function readSetting(): Promise<Setting> {
  const text = await Deno.readTextFile(settingPath);
  const Setting = JSON.parse(text);
  return Setting as Setting;
}

export async function editSetting(key:string,value:string): Promise<void> {
  const setting = await readSetting();
  setting[key] = value;
  await Deno.writeTextFile(settingPath, JSON.stringify(setting));
}

// export async function writeSetting(setting: Setting): Promise<void> {
//   await Deno.writeFile(settingPath, setting);
// }
