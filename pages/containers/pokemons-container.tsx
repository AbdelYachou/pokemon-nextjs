import React, { useState } from "react";
import { PokemonsList } from '../components/pokemons-list';

export function PokemonsContainer() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function onPokemonSelected({ target }) {
    console.log(`Selected: ${target.value}`);
    setSelectedPokemon(target.value);
  }

  return (
    <div>
      <PokemonsList onPokemonSelected={onPokemonSelected}/>
    </div>
  );

}
