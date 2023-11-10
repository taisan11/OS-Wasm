// messages.ts
// deno-lint-ignore no-explicit-any
export const mes: { [key: string]: any } = {
  en: {
    exitMessage: "Enter 'exit' to quit.",
    commandNotFound: "command not found",
    Nocommandentered: "No command entered",
    Nosubcentered: "No subcommand entered",
    // helpコマンド用
    page: {
      1: `Page 1`,
      2: `Page 2`,
    },
    abouthelp: "View details of wasmOS",
    updatahelp: "Update wasmOS",
    helphelp: "View help",
  },
  ja: {
    exitMessage: "exitと入力すると終了します",
    commandNotFound: "コマンドが見つかりません",
    Nocommandentered: "コマンド入力しろや",
    Nosubcentered: "サブコマンドがないのでhelpを見ろ",
    // helpコマンド用
    page: {
      1: `1ページ目`,
      2: `2ページ目`,
    },
    abouthelp: "wasmOSの詳細を表示!!",
    updatahelp: "アプデする(まだできてない)",
    helphelp: "helpを表示(このコマンド)",
  },
};
