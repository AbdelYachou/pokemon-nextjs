import React, { useState } from "react";
import styles from './PokemonsContainer.module.css'
import { PokemonsList } from '../components/PokemonsList';
import { SelectedCard } from '../components/SelectedCard';
import { EvolutionCard } from '../components/EvolutionCard';

export function PokemonsContainer() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedEvolution, setSelectedEvolution] = useState(null);

  function onPokemonSelected({ target }) {
    console.log(`Selected: ${target.value}`);
    setSelectedPokemon(target.value);
    setSelectedEvolution(null);
  }

  function onEvolutionSelected({ target }) {
    console.log(`Evolution: ${target.value}`);
    setSelectedEvolution(target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.listcontainer}>
        <PokemonsList onPokemonSelected={onPokemonSelected}/>
      </div>
      <div className={styles.selectedcard}>
        <SelectedCard id={selectedPokemon} onChange={onEvolutionSelected}/>
      </div>
      <div className={styles.evolutioncard}>
        <EvolutionCard id={selectedEvolution} />
      </div>
    </div>
  );

}
