import { texts } from "../i18n.ts";
const enUS: texts = {
  system: {
    exitMessage: "Enter 'exit' to quit.",
    commandNotFound: "command not found",
    Nocommandentered: "No command entered",
    Nosubcentered: "No subcommand entered",
    Pleasereboot: "Please reboot",
  },
  help: {
    pagenum: (page: number) => `${page}th page`,
    about: "View details of wasmOS",
    updata: "Update wasmOS",
    help: "View help",
  },
};

export default enUS;