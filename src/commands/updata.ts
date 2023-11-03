import { blue } from "../deps.ts";

function updata() {
  const updataTF = confirm("Do you want to update");
  if (updataTF === true) {
    console.log("updata");
  } else {
    console.log("cancel");
  }
}

export { updata };
