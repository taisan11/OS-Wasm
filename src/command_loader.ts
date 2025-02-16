import {type texts } from "./i18n.ts";

export async function commandLoader(): Promise<
  Map<string, (lang: string, subc: string[],mes:texts) => unknown>
> {
  const commands = new Map();
  const commandFiles = Deno.readDirSync(import.meta.dirname+"/src/commands");
  for (const commandFile of commandFiles) {
    if (commandFile.isFile && commandFile.name.endsWith(".ts")) {
      const commandModule = await import(`./commands/${commandFile.name}`);
      for (const command in commandModule) {
        commands.set(command, commandModule[command]);
      }
    }
  }
  return commands;
}

export async function cmd(name:string): Promise<(lang: string, subc: string[],mes:texts) => unknown>{
  const commandModule = await import(`./commands/${name}.ts`);
  return commandModule[name];
}