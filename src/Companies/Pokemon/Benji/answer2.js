import React, { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(null);

  let card = {
    name: "bulbasaur",
    uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  };
  let card2 = {
    name: "ivysaur",
    uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  };
  let card3 = {
    name: "venusaur",
    uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  };
  let defaultCard = {
    name: "charmander",
    uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  };

  let belt = [card, card2, card3];

  function handleClick(e, card) {
    console.log("click", e.target, card, current);
    if (current && card && current.name == card.name) {
      setCurrent(defaultCard);
    } else {
      setCurrent(card);
    }
  }

  return (
    <div className="app">
      <div className="header">
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/coderpad_logo.svg" />
        </div>
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
          <span>React App</span>
        </div>
      </div>
      <div className="content">
        {belt.map((card) => {
          return card && current && card.name == current.name ? (
            <img src={card.uri} onClick={(e) => handleClick(e, card)} />
          ) : (
            <img src={defaultCard.uri} onClick={(e) => handleClick(e, card)} />
          );
        })}
      </div>
      <div className="footer">Use the Shell to install new packages.</div>
    </div>
  );
}

export default App;
