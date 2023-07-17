// Set pokemon checks for location of mon, if it exists, remove it from the array
// If it doesn't exist and cache is full, remove first element
// push mon to array

// Get looks for mon in cache, if exists: remove it and push mon to cache, return last index

class TrainerBelt {
  constructor(size) {
    this.maxBalls = size;
    this.cache = [];
  }

  setPokemon(item) {
    let cache = this.cache;
    if (cache.indexOf(item) != -1) {
      cache.splice(cache.indexOf(item), 1);
    } else if (cache.length == this.maxBalls) {
      cache.shift();
    }
    cache.push(item);
  }

  getPokemon(pokemon) {
    let cache = this.cache;
    let ind = cache.indexOf(pokemon);

    if (ind != -1) {
      //pokemon exists in cache
      let item = cache[ind];
      cache.splice(item, 1);
      cache.push(pokemon);
    }
    return cache[cache.length];
  }

  battle(pokemon) {
    // refresh the pokemon
    let current = this.getPokemon("Charmander");
    // send current pokemon to battle
  }
}
console.log("run");
let belt = new TrainerBelt(3);
belt.setPokemon("Bulbasaur");
belt.setPokemon("Charmander");
belt.setPokemon("Pikachu");
belt.setPokemon("Snorlax");
belt.battle("Charmander");

console.log("belt array", [...belt.cache]);
