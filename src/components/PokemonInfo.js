export function PokemonInfo({ pokemon }) {
  return (
    <div className="pokemon-info">
      <p className="id">#{pokemon.entry}</p>
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
