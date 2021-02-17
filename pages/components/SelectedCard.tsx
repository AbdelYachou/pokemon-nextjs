import React, { useState } from "react";
import { PokemonCard } from '../components/PokemonCard';
import styles from './Card.module.css'
import Pokeball from '../../ui/svg/pokeball.svg';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../graphql/get-pokemon';

export function SelectedCard({ id, onChange }) {

  if(id) {
    const { error, data } = useQuery(GET_POKEMON, {
      variables: { id },
    });

    if (error) return `Error! ${error.message}`;
    const pokemon = data && data.getPokemon;
    if (pokemon)
      return (
        <div>
          <PokemonCard pokemon={pokemon} />
          {pokemon.prev_evolution && <div>
            {pokemon.prev_evolution.map(pokemon => (
              <div className={styles.evolution} key={pokemon.num} onClick={onChange}>
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
                <div className={styles.evolution} key={pokemon.num} onClick={onChange}>
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
  }
  return (
    <div className={styles.center}>
      <Pokeball /> Select a Pokemon
    </div>
  );}
