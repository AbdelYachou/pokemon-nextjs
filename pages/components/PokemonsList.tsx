import React, { useState }  from 'react';
import styles from './PokemonsList.module.css'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export function PokemonsList({ onPokemonSelected }) {
  const [selectedCard, setSelectedCard] = useState(null);
  function onCardSelected({ target }) {
    console.log("Card Selected");
    setSelectedCard(target.value);
  }

  const { error, data } = useQuery(GET_POKEMONS);

  if (error) return `Error! ${error.message}`;
  if (data)
    return (
      <div>
        <ul className={styles.pokemonslist}>
          {data.getPokemons.map(pokemon => (
            <li className={styles.card} key={pokemon.id} onClick={(e)=>{onPokemonSelected(e);onCardSelected(e)}}>
            <div className={pokemon.num===selectedCard ? styles.cardactive:styles.carddeactive}>
              <input type="image" src={pokemon.img} value={pokemon.num} className={styles.cardimage}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  return null;
}
