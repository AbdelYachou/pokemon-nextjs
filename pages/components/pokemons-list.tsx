import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export function PokemonsList({ onPokemonSelected }) {
  const { error, data } = useQuery(GET_POKEMONS);

  if (error) return `Error! ${error.message}`;
  if (data)
    return (
      <div>
        <ul>
          {data.getPokemons.map(pokemon => (
            <li key={pokemon.id} onClick={onPokemonSelected}>
              <button value={pokemon.num}>
                {pokemon.img}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  return null;
}
