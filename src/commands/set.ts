function set(lang: string, subc: string[]) {
  if (subc[1] === undefined) {
    console.log("なし");
  }
  console.log(subc[0], subc[1]);
}

export { set };
