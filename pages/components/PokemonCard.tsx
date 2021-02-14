import React, { useState } from "react";
import styles from './PokemonCard.module.css'
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../graphql/get-pokemon';

export function PokemonCard({ id }) {

  const [selectedEvolution, setSelectedEvolution] = useState(null);

  function onEvolutionSelected({ target }) {
    console.log(`Evolution: ${target.value}`);
    setSelectedEvolution(target.value);
  }

  const { error, data } = useQuery(GET_POKEMON, {
    variables: { id },
  });

  if (error) return `Error! ${error.message}`;
  const pokemon = data && data.getPokemon;
  if (pokemon)
    return (
      <div>
        <div className={styles.presentation}>
          <img src={pokemon.img} />
          <div>{pokemon.name} </div>
          <div>{pokemon.type.map(type => (<span key={type}> {type} </span>))} </div>
        </div>

        <div className={styles.details}>
          <div>Height: {pokemon.height} </div>
          <div>Height: {pokemon.weight} </div>
          <div>Weaknesses: {pokemon.weaknesses.join(', ')} </div>
        </div>
        {pokemon.prev_evolution && <div>
          {pokemon.prev_evolution.map(pokemon => (
            <div key={pokemon.num} onClick={onEvolutionSelected}>
            Prev Evolution
              <div>
                <button value={pokemon.num}>
                  {pokemon.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        }
        {pokemon.next_evolution && <div>
            {pokemon.next_evolution.map(pokemon => (
              <div key={pokemon.num} onClick={onEvolutionSelected}>
              Next Evolution
                <div>
                  <button value={pokemon.num}>
                    {pokemon.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    );
  return null;
}
