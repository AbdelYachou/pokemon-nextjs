import React, { useState } from "react";
import styles from './PokemonsContainer.module.css'
import { PokemonsList } from '../components/PokemonsList';

export function PokemonsContainer() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function onPokemonSelected({ target }) {
    console.log(`Selected: ${target.value}`);
    setSelectedPokemon(target.value);
  }

  return (
    <div className={styles.conatiner}>
      <PokemonsList onPokemonSelected={onPokemonSelected}/>
    </div>
  );

}
