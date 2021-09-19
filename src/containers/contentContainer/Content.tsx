import React, { useState } from "react";
import styles from "./Content.module.css";
import { PokemonsList } from "@components";
import Card from "../cardContainer/Card";

const Content: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedEvolution, setSelectedEvolution] = useState(null);

  function onPokemonSelected(value?: string) {
    setSelectedPokemon(value);
    setSelectedEvolution(null);
  }

  function onEvolutionSelected(value?: string) {
    setSelectedEvolution(value);
  }

  return (
    <main className={styles.mainContainer}>
      <section className={styles.listWrapper}>
        <PokemonsList onChange={onPokemonSelected} />
      </section>
      <section className={styles.cardsContainer}>
        <Card id={selectedPokemon} navigationCallback={onEvolutionSelected} />
        <Card id={selectedEvolution} />
      </section>
    </main>
  );
};

export default Content;
