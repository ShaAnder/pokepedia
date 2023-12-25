import { useState } from "react";

const testPokemon = [
  {
    entry: 1,
    name: "Bulbasaur",
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`,
    types: ["Grass", "Poison"],
  },
  {
    entry: 2,
    name: "Ivysaur",
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png`,
    types: ["Grass", "Poison"],
  },
  {
    entry: 3,
    name: "Venasaur",
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png`,
    types: ["Grass", "Poison"],
  },
  {
    entry: 4,
    name: "Charmander",
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png`,
    types: ["Fire"],
  },
  {
    entry: 5,
    name: "Charmeleon",
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png`,
    types: ["Fire"],
  },
  {
    entry: 6,
    name: "Charizard",
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png`,
    types: ["Fire", "Flying"],
  },
];

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

  // create a variable for storing our sorted pokemon
  let sortedPokemon;

  // sort by input
  if (sortPokemon === "input") sortedPokemon = testPokemon;

  // sort by name
  if (sortPokemon === "name")
    sortedPokemon = testPokemon
      .slice()
      .sort((a, b) => a.name().localecompare(b.name));

  // sort by name
  if (sortPokemon === "number")
    sortedPokemon = testPokemon
      .slice()
      .sort((a, b) => a.entry().localecompare(b.entry));

  return (
    <div className="pokedex-container">
      <div className="actions">
        <select
          value={sortPokemon}
          onChange={(e) => setSortPokemon(e.target.value)}
        >
          <option value="name">Sort By Pokemon Name</option>
          <option value="number">Sort By Pokedex Entry</option>
        </select>
      </div>
      <div className="pokedex-results">
        <ul>
          {sortedPokemon.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Pokemon({ pokemon }) {
  console.log(pokemon.types[0]);

  return (
    <div className="results">
      <li className="pokemon-card">
        <img className="pokemon-img" src={pokemon.image} />
        <PokemonInfo pokemon={pokemon} />
      </li>
    </div>
  );
}

function PokemonInfo({ pokemon }) {
  return (
    <div className="pokemon-info">
      <p className="id">000{pokemon.entry}</p>
      <h5>{pokemon.name}</h5>
      <div className="abilities">
        <span className={`pill background-color-${pokemon.types[0]}`}>
          {pokemon.types[0]}
        </span>
      </div>
      <div className="abilities">
        <span className={`pill background-color-${pokemon.types[1]}`}>
          {pokemon.types[1]}
        </span>
      </div>
    </div>
  );
}

export default App;
