import { ensureDir, exists } from "https://deno.land/std/fs/mod.ts";

interface Setting {
  lang: string;
}

const settingPath = "./setting.json";
if (!(await exists(settingPath))) {
  await ensureDir("./");
  const syokiSetting: string = '{\n    "lang": "en"\n}';
  const encoder = new TextEncoder();
  const syokiSettingUint8Array = encoder.encode(syokiSetting);
  await Deno.writeFile(settingPath, syokiSettingUint8Array);
}

export async function readSetting(): Promise<Setting> {
  const text = await Deno.readTextFile(settingPath);
  const Setting = JSON.parse(text);
  return Setting as Setting;
}

// export async function writeSetting(setting: Setting): Promise<void> {
//   await Deno.writeFile(settingPath, setting);
// }
