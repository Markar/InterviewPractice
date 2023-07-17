// Design a program to find paths between two words of equal length by changing one letter at a time,
// where every word in the path is valid in a given dictionary.

// const dict = ['cat', 'bat', 'bet', 'bot', 'bog', 'dog'];
const start = "hit";
const target = "cog";
const dict = ["hot", "dot", "dog", "lot", "log"];

function checkWordsByIndex(index) {
  //loop through words in dictionary
  for (let i = 0; i < dict.length; i++) {
    // check the letter of the index we're at against the target word
    let letter = dict[index];
    let targetLetter = target[index];

    if (letter === targetLetter) {
      // Found the next word
      return dict[i];
    }
  }
}

function path() {
  let next = checkWordsByIndex(i);
  return next;
  // for (let i = 0; i < dict.length; i++) {

  //   let word = dict[i];

  //   if (start[])

  // }
}

let res = path();
console.log("res", res);

// How would you use forms in React
