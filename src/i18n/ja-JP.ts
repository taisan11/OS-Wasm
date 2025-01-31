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
    about: "wasmOSの詳細を表示!!",
    updata: "アプデする(まだできてない)",
    help: "helpを表示(このコマンド)",
    run: "apps内のwasmファイルを実行",
  },
};

export default jaJP;