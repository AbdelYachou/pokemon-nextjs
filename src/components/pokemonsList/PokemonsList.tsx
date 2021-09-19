import React, { useState } from "react";
import styles from "./PokemonsList.module.css";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@graphql/get-pokemons";

interface Props {
  onChange: (x?: string) => void;
}

const PokemonsList: React.FC<Props> = ({ onChange }: Props) => {
  const [selectedCard, setSelectedCard] = useState(null);

  function onCardSelected(pokemonNum: string) {
    setSelectedCard(pokemonNum);
    onChange(pokemonNum);
  }

  const { data, error, loading } = useQuery(GET_POKEMONS);
  if (error) return <>`Error! ${error.message}`</>;
  if (loading) return <>Loading...</>;

  return (
    <ul className={styles.pokemonsContainer}>
      {data?.getPokemons.map((pokemon) => (
        <li
          key={pokemon.id}
          onClick={() => onCardSelected(pokemon.num)}
          className={[
            styles.pokemonWrapper,
            pokemon.num === selectedCard ? styles.selected : "",
          ].join(" ")}
        >
          <img
            src={pokemon.img}
            alt={pokemon.name}
            className={styles.cardImg}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokemonsList;
