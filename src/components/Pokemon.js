import { PokemonInfo } from "./PokemonInfo";
import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div className="results">
      <li className="pokemon-card">
        <img className="pokemon-img" src={pokemon.image} />
        <PokemonInfo pokemon={pokemon} />
      </li>
    </div>
  );
}
