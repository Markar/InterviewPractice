class TrainerBelt {
  constructor(size) {
    this.maxBalls = size;
    this.roster = new Map();
  }

  addPokemon(pokemon) {
    let r = this.roster;

    if (r.size < this.maxBalls) {
      r.set(pokemon, r.size);
    } else {
      // get least recently used pokemon
      let lowest = this.maxBalls;
      console.log("add roster", [...this.roster]);
      // could speed this up by use for of to work with map natively
      [...r].map((item) => {
        console.log("item", item);
        if (item[1] < lowest) {
          lowest = item;
        }
      });

      console.log("lowest", lowest);
      r.delete(lowest[0]);
      r.set(pokemon, this.maxBalls);
    }
  }
}

let belt = new TrainerBelt(3);
belt.addPokemon("Bulbasaur");
belt.addPokemon("Charmander");
belt.addPokemon("Pikachu");
belt.addPokemon("Skitty");
belt.addPokemon("Spriggatito");
belt.addPokemon("Bulbasaur");
console.log("belt array", [...belt.roster]);
