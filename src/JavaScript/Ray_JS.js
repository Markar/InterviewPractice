// input: array of numbers, unordered, find all pairs that add up to a given numbers, all numbers are unique
// input = [9, 2, 42, 4, -1, 6]
// sum = 8
// output =[ [9, -1], [2, 6] ]



// implement a react component that takes in the following phone numbers and outputs them in standard (xxx) xxx-xxxx format

const valuesIn = [
      "(408) 345-9256",
      "(213) 639-2633",
      "(415) 876-5539",
      "415-876-5539",
      "4158765539",
      "408-345-9256",
      "<415_trolley>",
      "212.867.5309",
      "213-NEW-CODE",
      "--<<415^troll^39>>--",
    ];

// We will generate a range of numbers, scramble it, and remove one. Find the missing one
// For example, [5,1,4,2] => 3
// This represents the range of numbers from 1 to 5, but missing the number 3, and scrambled
// This next one here represents the numbers 2-7, but missing the number 6, and scrambled
// [2,3,4,7,5] => 6
// [3,1] => 2
// We can assume all numbers will be positive, and less than 1000.



// Sort a list of movie titles, ignoring some words like the, a, an
// You can assume all lower case.
// only ignore these three words if they appear as the FIRST word
// For example: [
//     dodgeball,
//     iron man,
//     the apple,
//     a walk to remember,
//     the zebra,
//     racecars,
// ]
// =>
// the apple,
// dodgeball,
// iron man,
// racecars,
// a walk to remember,
// the zebra,



// what order does this output and why
(function () {
  function bob() {
    console.log("a");
  }
  setTimeout(() => {
    console.log("b");
  }, 0);
  Promise.resolve("c").then(console.log);
  bob();
})();