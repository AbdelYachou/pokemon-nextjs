import React from 'react';
import styles from './SelectedCard.module.css'
import { PokemonCard } from '../components/PokemonCard';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../graphql/get-pokemon';

export function EvolutionCard({ id }) {
  if (id) {
    const { error, data } = useQuery(GET_POKEMON, {
          variables: { id },
      });
    if (error) return `Error! ${error.message}`;
    const pokemon = data && data.getPokemon;
    if (pokemon)
      return (
        <PokemonCard pokemon={pokemon} />
      );
  }
  return (<div>Select an Evolution</div>);
}
