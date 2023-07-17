import React, { useEffect, useState } from "react";
import LRU from "./TrainerBeltLRU";
import { pokemonList } from "./pokemon";
//Write some Python code that models a Pokémon Trainer Belt.
//Try to find a new way of determining what happens when you catch
//a Pokémon. Normally the new Pokémon will be sent to storage if
//the belt is full. Instead, add it to the belt and send the
//Pokémon least recently battled with and/or caught to storage.

export const TrainerBelt = (props) => {
  const [belt, setBelt] = useState();

  useEffect(() => {
    let lru = new LRU(2);
    setBelt(lru);
  }, []);

  return (
    <>
      <button
        style={{ width: "150px", height: "50px" }}
        onClick={() => {
          let b = belt;
          b.set(
            1,
            pokemonList.find((mon) => mon.id === 1)
          );
          setBelt(b);
          console.log("belt", b.cache);
        }}
      >
        Bulbasaur
      </button>

      <button
        style={{ width: "150px", height: "50px" }}
        onClick={() => {
          let b = belt;
          b.set(
            2,
            pokemonList.find((mon) => mon.id === 2)
          );
          setBelt(b);
          console.log("belt", b.cache);
        }}
      >
        Pikachu
      </button>

      <button
        style={{ width: "150px", height: "50px" }}
        onClick={() => {
          let b = belt;
          b.set(
            3,
            pokemonList.find((mon) => mon.id === 3)
          );
          setBelt(b);
          console.log("belt", b.cache);
        }}
      >
        Charmander
      </button>
    </>
  );
};
