import { useState } from "react";
import { testPokemon } from "./components/testPokemon";
import { PokemonInfo } from "./components/PokemonInfo";
import React from "react";

// helpers

import { shuffle } from "./components/helpers/shuffle";

function App() {
  return (
    <div className="App">
      <Pokedex testPokemon={testPokemon} />
    </div>
  );
}

function Pokedex({ testPokemon }) {
  // create our state for sorting the pokemon
  const [sortPokemon, setSortPokemon] = useState("input");
  const [showMorePokemon, setShowMorePokemon] = useState(false);

  // create a variable for storing our sorted pokemon
  let sortedPokemon;

  const handleSurpriseMeButton = (e) => {
    // // shuffle test pokemon
    // const sortedPokemon = React.useMemo(() => {
    //   const poke = testPokemon;
    //   return shuffle(poke);
    // }, []);
  };

  // sort by input
  if (sortPokemon === "input") sortedPokemon = testPokemon;

  // sort by Entry low to high
  if (sortPokemon === "numA") {
    sortedPokemon = testPokemon.slice().sort((a, b) => a.entry - b.entry);
    console.log(sortedPokemon);
  }

  // sort by Entry low to high
  if (sortPokemon === "numD") {
    sortedPokemon = testPokemon.slice().sort((a, b) => b.entry - a.entry);
  }

  // sort by a-z
  if (sortPokemon === "nameA")
    sortedPokemon = testPokemon
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

  // sort by z-a
  if (sortPokemon === "nameD") {
    console.log(testPokemon);
    sortedPokemon = testPokemon
      .slice()
      .sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="pokedex-container">
      <div className="actions">
        <button
          className="button button-lightblue no-arrow"
          onClick={() => handleSurpriseMeButton()}
        >
          Surprise Me!
        </button>

        <select
          className="custom-select custom-select-wrapper button-black"
          value={sortPokemon}
          onChange={(e) => setSortPokemon(e.target.value)}
        >
          <option value="numA">Lowest Number (First)</option>
          <option value="numD">Highest Number (First)</option>
          <option value="nameA">A-Z</option>
          <option value="nameD">Z-A</option>
        </select>
      </div>
      <div className="pokedex-results">
        <ul>
          {!showMorePokemon
            ? sortedPokemon
                .slice(0, 12)
                .map((pokemon) => (
                  <Pokemon pokemon={pokemon} key={pokemon.id} />
                ))
            : sortedPokemon.map((pokemon) => (
                <Pokemon pokemon={pokemon} key={pokemon.id} />
              ))}
        </ul>

        {!showMorePokemon && (
          <button
            className="button button-lightblue no-arrow"
            onClick={() => setShowMorePokemon(!showMorePokemon)}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

function Pokemon({ pokemon }) {
  return (
    <div className="results">
      <li className="pokemon-card">
        <img className="pokemon-img" src={pokemon.image} />
        <PokemonInfo pokemon={pokemon} />
      </li>
    </div>
  );
}

export default App;
