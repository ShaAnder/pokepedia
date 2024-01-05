import { useState } from "react";
import { testPokemon } from "./components/testPokemon";
import React from "react";

// helpers

// Main Pokedex Import, contains all of our sub pokedex components
import { Pokedex } from "./components/Pokedex";

// App
function App() {
  // our pokemonList state, contains all the pokemon for our app
  const [pokeBall, setPokeBall] = useState(testPokemon);

  return (
    <div className="App">
      <Pokedex pokemonList={pokeBall} setPokemonList={setPokeBall} />
    </div>
  );
}

export default App;
