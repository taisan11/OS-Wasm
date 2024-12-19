import { read,write } from "./fs.ts";

const AppID = "example";
write("./aaa/test.txt", AppID, new TextEncoder().encode("Hello, World!"))
    .then(() => read("test.txt", AppID))
    .then((data) => console.log(new TextDecoder().decode(data)))
    .catch(console.error);