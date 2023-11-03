import { blue } from "../deps.ts";

function updata(lang: string) {
  const updataTF = confirm("Do you want to update");
  if (updataTF === true) {
    console.log("updata");
  } else {
    console.log("cancel");
  }
}

export { updata };
