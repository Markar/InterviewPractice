class TrainerBeltLRU {
  constructor(size) {
    this.maxBalls = size;
    this.roster = new Map();
    this.rosterArray = [];
  }

  addPokemonPop(pokemon) {
    let r = this.rosterArray;
    if (r.length < this.maxBalls) {
      r.push(pokemon);
    } else {
      r.pop();
      r.push(pokemon);
    }
  }

  addPokemonFront(pokemon) {
    let r = this.rosterArray;
    if (r.length < this.maxBalls) {
      r.push(pokemon);
    } else {
      r.splice(0, 1);
      r.push(pokemon);
    }
  }

  addPokemon(pokemon) {
    let r = this.roster;

    if (r.size < this.maxBalls) {
      r.set(pokemon, r.size);
    } else {
      // get least recently used pokemon
      let highest = 0;
      console.log("add roster", [...this.roster]);
      // could speed this up by use for of to work with map natively
      [...r].map((item) => {
        console.log("item", item);
        if (item[1] >= highest) {
          highest = item;
        }
      });
      // big o here would be

      console.log("highest", highest);
      r.delete(highest[0]);
      r.set(pokemon, this.maxBalls);
    }
  }

  battle(pokemon) {
    console.log(`sending ${pokemon} to battle`);
    let r = this.roster;
    console.log("r", [...r]);
    console.log("get", r.get(pokemon));
    let count = r.get(pokemon);
    count++;
    console.log("count", count);
    r.set(pokemon, count);
  }
}

let belt = new TrainerBeltLRU(4);
belt.addPokemon("Bulbasaur");
belt.addPokemon("Charmander");
belt.addPokemon("Pikachu");
belt.battle("Bulbasaur");
console.log("belt array", belt.roster);
