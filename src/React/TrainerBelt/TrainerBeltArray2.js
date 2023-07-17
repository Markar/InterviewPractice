// class TrainerBelt {
//   constructor(size) {
//     this.maxBalls = size;
//     this.roster = new Map();
//     this.rosterArray = [];
//   }

//   addPokemonPop(pokemon) {
//     let r = this.rosterArray;
//     if (r.length < this.maxBalls) {
//       r.push(pokemon);
//     } else {
//       r.pop();
//       r.push(pokemon);
//     }
//   }

//   addPokemonFront(pokemon) {
//     let r = this.rosterArray;
//     if (r.length < this.maxBalls) {
//       r.push(pokemon);
//     } else {
//       r.splice(0, 1);
//       r.push(pokemon);
//     }
//   }

//   addPokemon(pokemon) {
//     let r = this.roster;

//     if (r.size < this.maxBalls) {
//       r.set(pokemon, r.size);
//     } else {
//       // get least recently used pokemon
//       let highest = 0;
//       console.log("add roster", [...this.roster]);
//       // could speed this up by use for of to work with map natively
//       [...r].map((item) => {
//         console.log("item", item);
//         if (item[1] >= highest) {
//           highest = item;
//         }
//       });
//       // big o here would be

//       console.log("highest", highest);
//       r.delete(highest[0]);
//       r.set(pokemon, this.maxBalls);
//     }
//   }

//   battle(pokemon) {
//     pokemon.battle();
//     let r = this.roster;
//     [...r].map((item) => {
//       if (item.name === pokemon.name) {
//         item.set();
//       }
//     });
//   }
// }

// // let belt = new TrainerBelt(2);
// // belt.addPokemon("Bulbasaur");
// // belt.addPokemon("Charmander");
// // belt.addPokemon("Pikachu");
// // console.log("belt array", [...belt.roster]);

// let belt = new TrainerBelt(2);
// belt.addPokemonFront("Bulbasaur");
// belt.addPokemonFront("Charmander");
// belt.addPokemonFront("Pikachu");
// console.log("belt array", belt.rosterArray);
