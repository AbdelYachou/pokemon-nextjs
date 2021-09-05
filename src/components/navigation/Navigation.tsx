import React from "react";
import styles from "./Navigation.module.css";

interface Evolution {
  num: string;
  name: string;
}

interface Pokemon {
  prev_evolution?: [Evolution];
  next_evolution?: [Evolution];
}

interface Props {
  pokemon: Pokemon;
  onChange: (x?: string) => void;
}

const Navigation: React.FC<Props> = ({ pokemon, onChange }: Props) => {
  return (
    <div className={styles.evolution}>
      {pokemon.prev_evolution?.map((evolution) => (
        <div
          className={styles.evolutionLink}
          key={evolution.num}
          onClick={() => onChange(evolution.num)}
        >
          Prev Evolution
          <button>{evolution.name}</button>
        </div>
      ))}
      {pokemon.next_evolution?.map((evolution) => (
        <div
          className={styles.evolutionLink}
          key={evolution.num}
          onClick={() => onChange(evolution.num)}
        >
          Next Evolution
          <button>{evolution.name}</button>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
