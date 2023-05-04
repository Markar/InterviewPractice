/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* BASICS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Javascript has some basic data structures available to it:

// Objects, Arrays, Maps, Sets.

// These are good for different use cases

// You can use some of these to create other types of data structures, such as
// hash tables, stacks, queues, linked lists etc

// ARRAYS:
[1, 2, 2, 9, 3];
// (Insertion) Ordered data, duplicates are fine, iterable, slow FIND, DELETE,
// length adjusts dynamically

// SETS:

// Unordered data, don't want duplicates, iterable (but order could change),
// very fast HAS/FIND, DELETE, length adjusts dynamically

// Why use sets over arrays? 
// -Very fast HAS/FIND, DELETE, guaranteed uniqueness
// -Great if you want to create a list of unique things and need to check if something already exists
// Ex: creating a list of team names at trivia:

const teams = new Set("quizmaster", "assistant");
const addTeam = (name) => {
  name = name.toLowerCase();
  if (teams.has(name)) {
    return "Pick another name!";
  } else {
    teams.add(name);
    return `Team ${name} successfully registered!`;
  }
};

const removeTeam = (name) => {
  name = name.toLowerCase();
  teams.delete(name);
};

const listTeams = () => {
  for (const team of teams) {
    // team order may change each time you run it
    console.log(team);
  }
};

// OBJECTS:

// Key/Value pairs of unordered data, very fast GET and SET, can have methods,
// keys are unique but values are not, keys MUST be strings/values/symbols, can
// store data AND functionality

const o = {
  lol: "lol",
  age: 22,
  setAge(num) {
    this.age = num;
  },
};

// MAPS:

// Key/Value pairs of ordered, iterable data (can use For Of), keys can be
// anything (incl reference values like arrays), keys are unique but values are
// not. Maps are optimized for data storage, not extending like objects. Dot
// notation not supported, have to use .get()

// Why use maps over objects? Optimized for data storage, perfect if you JUST
// want key/value storage. Slightly faster access in huge data sets. Easier to iterate.

const m = new Map();
m.set("name", "max");
m.set("avg", 1.53);
m.set("lastResult", null);
m.set({ name: "Germany", pop: 100 }, 0.89);
// no way to retrieve this without iterating because you never stored the pointer for this object
m.set(true, true); // booleans, objects, arrays can now be keys
for (const item of m) {
  console.log(item); // it's an array of length 2!
  item[0]; // key
  item[1]; // value
}
m.get("name"); // max
m.delete("avg");

// WEAKMAP
// same as MAP but keys are garbage collected if not used elsewhere

// WEAKSET
// same as SET but values are garbage collected if not used elsewhere

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Big O Notation / Time Complexity =-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Set.prototype.has, add and delete to all be O(1) in the average case. The same for the Map and Weak– equivalents.

// https://dev.to/himanshukanojiya/big-o-time-complexities-of-javascript-object-arrays-and-their-methods-5gpk

// When to use object

// We should use it when we don't need to save data in order, and at the same
// time required to get fast access, fast insertion, and removal.

// Insertion Operation: Happens in O(1)
// Removal Operation: Happens in O(1)
// Searching Operation: Happens in O(N) - Will be updated based on research
// Access Operation: Happens in O(1)
// Object.keys Method: Happens in O(N)
// Object.values Method: Happens in O(N)
// Object.entries Method: Happens in O(N)
// hasOwnProperty Method: Happens in O(N)

// Insert, Removal, Access = constant time O(1)
// Search, Object.keys, Object.values, Object.entries = linear time O(n)

// When to use Array

// We should use it when we need to save data in order, and at the same time
// required to get fast access, fast insertion, and removal.

// Insertion at the end of an Array: O(1)
// Removal at the end of an Array: O(1)
// Insertion at the beginning & mid of a non-empty Array: O(N)
// Removal of item from the start & mid of a non-empty Array: O(N)
// Searching if an Array unsorted: O(N)
// Searching if an Array sorted: Depends on the algorithm
// Access: O(1)
// push (inserting element at the end of an array): O(1)
// pop (deleting an element from the end of an array): O(1)
// Shift(opposite to push, and it shifts next elements to next index position): O(N)
// unshift (opposite to pop, and it shifts elements to the previous index position): O(N)
// concat: O(N)
// slice: O(N)
// splice: O(N)
// sort: depends, usually n log n
// forEach, map, filter, reduce: O(N)

// Insert(at end), removal(at end) = constant time O(1)
// Insert (at start), removal (at start) = linear time O(n)
// Search, map, filter, reduce, foreach = linear time O(n)

// Hash Maps

// For most cases, search, insertion, and deletion of a hash map are Big O(1)
// constant time (which is the best possible runtime). It also must be said
// while not common worst case for a hash map is Big O(n) linear time (which
// isn’t terrible).

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Sets =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// a list of items that we can add to, remove from, loop over
// but not an array, unique items only, and doesn't have index

const people = new Set();
people.add("Wes");
people.add("Snickers");
people.add("Kait");
people.delete("Snickers"); // don't need index, like in an array!
people.size; // instead of length
// people.clear() // empties whole set
people.values(); // returns an iterable generator, can call .next() on it repeatedly
// or just For Of through it
for (const person of people) {
  console.log(person);
}
const students = new Set(["Wes", "Kara", "Tony"]);
students.has("Wes"); // true
students.has("Wesley"); // false

// useful for adding new items to an iterator while it's being iterated on, like a queue
const brunch = new Set();
// as people start coming in
brunch.add("wes");
brunch.add("Sarah");
brunch.add("Simone");
// ready to open!
const line = brunch.values();
console.log(line.next().value);
console.log(line.next().value);
console.log("line", line); // Simone
brunch.add("Heather");
brunch.add("Snickers");
console.log("brunch", brunch); // wes, Sarah, Simone, Heather, Snickers ... whole list
console.log("line", line); // Simone, Heather, Snickers ... added new people to end of iterator

// weak sets, can only contain objects (not strings, nums etc.)
// cannot loop over it or clear it, useful because it garbage collects itself after items are deleted
const branch = new WeakSet();

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Maps =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Hashtable vs Hashmap:

// Hashtables and hashmaps are data structures that store data in an array-like
// format, using key/value pairs, where the (hashed) key corresponds to the
// index in the array.

// Hashmaps offer the same key/value functionality and come native in JavaScript
// (ES6) in the form of the Map() object (not to be confused with
// Array.prototype.map()).

// The key in a hashmap can be any datatype, this includes arrays and objects.
// Meanwhile, objects (hash tables) can only use integers, strings, and symbols as their keys.

// Note: One of the primary pitfalls to be aware of when it comes to hashmaps in
// JavaScript, is that they cannot be directly translated to JSON.

const dogs = new Map();
dogs.set("Snickers", 3);
dogs.set("Sunny", 2);
dogs.set("Hugo", 10);
dogs.forEach((val, key) => console.log(val, key));
for (const [key, val] of dogs) {
  console.log(key, val);
}
dogs.delete("Hugo"); // true
dogs.clear(); // empties it

// map can be better than an object because the KEY can be an object itself
// like a metadata dictionary.
const clickCounts = new Map();
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  // button is a DOM object
  // map.set(key, value)
  clickCounts.set(button, 0);
  button.addEventListener("click", function () {
    // no => fn because we want (this) context
    // grab current value from map.get(key)
    const val = clickCounts.get(this);
    clickCounts.set(this, val + 1);
    console.log(clickCounts);
  });
});

// weak maps are similar to weak sets, use them for things you want garbage collected
// to avoid memory leaks
let dog1 = { name: "Snickers" };
let dog2 = { name: "Sunny" };
const strong = new Map();
const weak = new WeakMap();
strong.set(dog1, "Snickers is the best!");
weak.set(dog2, "Sunny is the 2nd best!");
dog1 = null;
dog2 = null;
// after a while, weak will be empty, strong will still contain Snickers,
// even though the original doesn't exist

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* EXAMPLE DATA STRUCTURE EVALUATION -=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Let's say you have a LIST OF ITEMS where every item has a weight and a value.
// You have a bag that can only hold X weight. Write a program that maximizes
// the value of items that will fit in the bag.

// Ok so we need to store all of this information. Let's look at our 4 basics:
// Objects, Arrays, Maps, Sets.

// Sets are out because they only store values, and we need to store more data than that.

// Item: value, weight

// that could be Object or Map or an Array of Objects.

// We want to sort these items by their highest value/weight ratio to lowest.

// Divide value by weight, then sort, then try and put them each in the bag in order?

const itemz = [
  [100, 2, "gold"],
  [20, 3, "silver"],
  [5, 4, "steel"],
  [2, 1, "tin"],
];

itemz.sort((a, b) => {
  // need defensive coding around 0 values?
  const weightedValueA = a[0] / a[1];
  const weightedValueB = b[0] / b[1];
  return weightedValueB - weightedValueA;
});

function fillBag(bagSize, sortedArr) {
  let remaining = bagSize;
  const bag = [];
  for (let item of sortedArr) {
    remaining = remaining - item[1];
    if (remaining > 0) {
      // the item fit!
      bag.push(item);
    } else {
      break;
    }
  }
  return bag;
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* OTHER DATA TYPES YOU CAN CREATE WITH JS -=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// THESE ARE REALLY ONLY FOR NICHE OPTIIMZATIONS OVER THE DEFAULT DATA
// STRUCTURES

// https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

// At a high level, there are basically three types of data structures.

// Stacks and Queues are array-like structures that differ only in how items are
// inserted and removed.

// Linked Lists, Trees, and Graphs are structures with nodes that keep
// references to other nodes.

// Hash Tables depend on hash functions to save and locate data.

// In terms of complexity, Stacks and Queues are the simplest and can be
// constructed from Linked Lists. Trees and Graphs are the most complex because
// they extend the concept of a linked list. Hash Tables need to utilize these
// data structures to perform reliably.

// In terms of efficiency, Linked Lists are most optimal for recording and
// storing of data, while Hash Tables are most performant for searching and
// retrieving of data.

// As the number of items grows, push/pop becomes increasingly more performant
// than unshift/shift because with unshift/shift every item needs to be reindexed

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* STACKS AND QUEUES -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Arrays can be used to create queues and stacks with combinations of pop/shift
// (remove) and push (add to end)

// shift removes and returns the first item of an array
// pop removes and returns the last item of an array
"a", "b", "c";

// unshift adds to the start of an array and returns the new length
// push adds to the end of an array and returns the new length

// shift/unshift = remove/add from start of an array

// pop/push = remove/add from end of an array

// so if we wanted to implement a STACK (last in, first out, LEFT-TO-RIGHT, left = start)
// we just limit an array to only use pop (remove from end) / push (add to end)
let arr = [];
arr.push("a"); // [a]
arr.push("b"); // [a,b]
arr.push("c"); // [a,b,c] (last in)
arr.pop(); // c // arr === [a,b] (first out)
arr.pop(); // b // arr === [a]

// if you wanted to REVERSE A STACK (last in, first out, but RIGHT-TO-LEFT, right = start)
// we limit an array to only use shift (remove from start) / unshift (add to start)
arr = [];
arr.unshift("a"); // [a]
arr.unshift("b"); // [b, a]
arr.unshift("c"); // [c, b, a] (last in)
arr.shift(); // c // arr === [b, a] (first out)
arr.shift(); // b // arr === [a]

// likewise if we wanted to implement a QUEUE (first in, first out, LEFT-TO-RIGHT, left = start)
// we just limit an array to only use shift (remove from start) / push (add to end)
arr = [];
arr.push("a"); // [a] (first in)
arr.push("b"); // [a,b]
arr.push("c"); // [a,b,c]
arr.shift(); // a // arr === [b, c] (first out)
arr.shift(); // b // arr === [c]

// if you wanted to REVERSE A QUEUE (first in, first out, but RIGHT-TO-LEFT, right = start)
// remove from the end (pop), add to start (unshift)

arr = [];
arr.unshift("a"); // [a] (first in)
arr.unshift("b"); // [b, a]
arr.unshift("c"); // [c, b, a]
arr.pop(); // a // arr === [c, b] (first out)
arr.pop(); // b // arr === [c]

// knowing what we know about array performance
// a stack is the most performant
// a reverse stack is the least performant

// and queues and reverse queues are in the middle, depending on whether adding
// or removing is the most frequent action

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* LINKED LISTS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Like arrays, Linked Lists store data elements in sequential order. Instead of
// keeping indexes, linked lists hold pointers to other elements. The first node
// is called the head while the last node is called the tail. In a singly-linked
// list, each node has only one pointer to the next node. Here, the head is
// where we begin our walk down the rest of the list. In a doubly-linked list, a
// pointer to the previous node is also kept. Therefore, we can also start from
// the tail and walk “backwards” toward the head.

// Linked lists have constant-time insertions and deletions because we can just
// change the pointers. To do the same operations in arrays requires linear time
// because subsequent items need to be shifted over.

// Also, linked lists can grow as long as there is space. However, even
// “dynamic” arrays that automatically resize could become unexpectedly
// expensive. Of course, there’s always a tradeoff. To lookup or edit an element
// in a linked list, we might have to walk the entire length which equates to
// linear time. With array indexes, however, such operations are trivial.

// Why use a linked list over array? If you do a lot of insertions at the
// beginning on a list, bc that's very expensive in arrays.

//                    LINKED LIST         ARRAY
// Element access     O(n)                O(n) or O(1) with index
// Insert at End      O(1) via append     O(1) via push
// Insert at Start    O(1) via prepend    O(n) via unshift
// Insert at Mid      SearchTime + O(1)   O(n)
// Search Element     O(n)                O(n)

const n1 = {
  data: 100,
  next: null,
};

const n2 = {
  data: 200,
  next: null,
};

// two unrelated nodes! how do we link them together?
n1.next = n2;

// great, so how do we implement this general data structure in js? through classes

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);
// Node { data: 100, next: null }

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    // if there's already a this.head, we want to keep that reference
    // and set this as the new head
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    // create a new node with no tail
    const newNode = new Node(data);
    // travel down the list until the end
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }

  // Insert after the index specified
  // size = 1 = 1 item = index of that item is 1
  insertAfter(index, data) {
    if (index <= 0) {
      this.insertFirst(data);
    } else if (index >= this.size) {
      this.insertLast(data);
    } else {
      // keep memory of what last item was
      let currNode = this.head;
      // travel down the list until you get to the specified index
      for (let i = 1; i <= index; i++) {
        const nextNode = currNode.next;
        console.log("i", i, "index", index, "nextNode", nextNode);
        if (i === index) {
          console.log("i equals index");
          const newNode = new Node(data, nextNode);
          currNode.next = newNode;
        }
        currNode = nextNode;
      }
      this.size++;
    }
  }

  // Get at index
  getAt(index) {
    if (index <= 0) {
      return null;
    }
    if (index > this.size) {
      return null;
    }
    // keep memory of what last item was
    let currNode = this.head;
    // travel down the list until you get to the specified index
    for (let i = 1; i <= index; i++) {
      console.log("i", i, "index", index, "current", currNode);
      if (i === index) {
        console.log("i equals index");
        return currNode;
      }
      currNode = currNode.next;
    }
  }

  // Remove at index
  removeAt(index) {
    if (index <= 0) {
      return null;
    } else if (index > this.size) {
      return null;
    } else {
      // keep memory of previous items
      let currNode = this.head;
      // travel down the list until you get to the item before specified index
      if (index === 1) {
        // delete head
        this.head = currNode.next ?? null;
      }

      // 1 = a
      // 2 = b
      // 3 = c

      for (let i = 1; i < index; i++) {
        // i = 2;
        // index = 3;
        // currNode = b;
        // nextNode = c;
        let nextNode = currNode.next;
        console.log("i", i, "index", index, "nextNode", nextNode);
        if (i + 1 === index) {
          // next node is the index
          // delete it by setting this node.next
          // equal to the node after it

          currNode.next = nextNode.next ?? null;
        }
        currNode = nextNode;
      }
      this.size--;
    }
  }

  // Clear
  clear() {
    this.head = null;
    this.size = 0;
  }

  // Print list
  printList() {
    let currentNode = this.head;
    if (currentNode === null) {
      console.log("Empty");
      return;
    }
    while (currentNode.next) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
    console.log(currentNode);
  }
}

const ll = new LinkedList();
ll.insertFirst("boy");
ll.insertFirst("there");
ll.insertFirst("hey");
ll.insertLast("wyd");
ll.insertAfter(4, "today?");
ll.printList();

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Symbols -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// number, string, object, boolean, null, undefined (types)
// symbol is new type, unique ID, avoid naming collisions, however they can't be looped over
// with for of / in / each, and they won't show up on the object AT ALL unless you use
// Object.getOwnPropertySymbols()
// this could be useful for adding a count(?) where you're worried about running into
// char limits or conflicting guids because they are ALWAYS unique

// it's like a shadow layer on an object? that won't show up in for in

const classRoom = {
  [Symbol("Mark")]: { grade: 50, gender: "male" },
  [Symbol("olivia")]: { grade: 80, gender: "female" },
  [Symbol("olivia")]: { grade: 80, gender: "female" },
};

for (const person in classRoom) {
  // doesn't work
  console.log(person);
}

// if you do want to iterate over symbols, you can do it like this
const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map((sym) => classRoom[sym]);
console.log(data);
