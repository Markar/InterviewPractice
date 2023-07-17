class TrainerBelt {
  constructor(size) {
    this.maxBalls = size;
    this.cache = new Map();
  }

  getPokemon(pokemon) {
    let item = this.cache.get(pokemon);

    if (item) {
      this.cache.delete(pokemon);
      this.cache.set(pokemon, item);
    }

    return item;
  }

  setPokemon(key, val) {
    let cache = this.cache;
    if (cache.has(key)) {
      cache.delete(key);
    } else if (cache.size == this.maxBalls) {
      cache.delete(this.first());
      /* let check = [...cache].splice(1, this.maxBalls);
      console.log('check', check);
      cache = new Map(check); */
    }
    cache.set(key, val);
  }

  first() {
    console.log("next", this.cache.keys().next().value);
    return this.cache.keys().next().value;
  }

  battle(pokemon) {
    // refresh the pokemon
    let current = this.getPokemon("Charmander");
    // send current pokemon to battle
  }
}
console.log("run");
let belt = new TrainerBelt(3);
belt.setPokemon("Bulbasaur", {
  count: 3,
});
belt.setPokemon("Charmander", {
  count: 5,
});
belt.setPokemon("Pikachu", {
  count: 6,
});
belt.setPokemon("Snorlax", {
  count: 6,
});
belt.battle("Charmander");

//belt.battle("Charmander");
console.log("belt array", [...belt.cache]);
