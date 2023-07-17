function assign(messages) {
  for (let i = 0; i < res.length; i++) {
    let item = res[i];
    let letter = item[0];
    let number = item[1];

    for (let j = i; j < res.length; j++) {
      if (letter === "B" && res[j].length === 1) {
        res[i] = "B" + number;
        break;
      }
    }
  }

  return res;
}

let input = ["A1", "A2", "B", "B", "C1", "C2"];
console.log("ans", assign(input));
