import { texts } from "../i18n.ts";
const jaJP: texts = {
  system: {
    exitMessage: "終了します",
    commandNotFound: "コマンドが見つかりません",
    Nocommandentered: "コマンドが入力されていません",
    Nosubcentered: "サブコマンドが入力されていません",
    Pleasereboot: "再起動してください",
  },
  help: {
    pagenum: (page: number) => `${page}ページ目`,
    about: "このBotについてのヘルプ",
    updata: "アップデート情報のヘルプ",
    help: "このBotのヘルプのヘルプ",
  },
};

export default jaJP;