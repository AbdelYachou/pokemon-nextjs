import React, { useState } from "react";
import styles from './PokemonsContainer.module.css'
import { PokemonsList } from '../components/PokemonsList';
import { PokemonCard } from '../components/PokemonCard';

export function PokemonsContainer() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function onPokemonSelected({ target }) {
    console.log(`Selected: ${target.value}`);
    setSelectedPokemon(target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.listcontainer}>
        <PokemonsList onPokemonSelected={onPokemonSelected}/>
      </div>
      <div className={styles.cardcontainer}>
        {selectedPokemon && <PokemonCard id={selectedPokemon} />}
      </div>
    </div>
  );

}
