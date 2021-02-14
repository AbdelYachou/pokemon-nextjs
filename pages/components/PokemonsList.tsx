import React from 'react';
import styles from './PokemonsList.module.css'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export function PokemonsList({ onPokemonSelected }) {
  const { error, data } = useQuery(GET_POKEMONS);

  if (error) return `Error! ${error.message}`;
  if (data)
    return (
      <div>
        <ul className={styles.pokemonslist}>
          {data.getPokemons.map(pokemon => (
            <li className={styles.card} key={pokemon.id} onClick={onPokemonSelected}>
                <input type="image" src={pokemon.img} value={pokemon.num} className={styles.cardimage}/>
            </li>
          ))}
        </ul>
      </div>
    );
  return null;
}
