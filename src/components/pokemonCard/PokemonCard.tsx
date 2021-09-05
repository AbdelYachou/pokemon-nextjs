import React from "react";
import styles from "./PokemonCard.module.css";

interface Pokemon {
  name: string;
  img: string;
  type: [string];
  height: string;
  weight: string;
  weaknesses: [string];
}

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }: Props) => {
  return (
    <div className={styles.card}>
      <img src={pokemon.img} alt={pokemon.name} />
      <div className={styles.info}>
        <div className={styles.title}>
          <h1 className={styles.name}>{pokemon.name} </h1>
          <p>
            {pokemon.type.map((type) => (
              <span className={styles.type} key={type}>
                {type}
              </span>
            ))}
          </p>
        </div>
        <div className={styles.details}>
          <p>
            <strong>Height:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Weight:</strong> {pokemon.weight}
          </p>
          <p>
            <strong>Weaknesses:</strong> {pokemon.weaknesses.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
