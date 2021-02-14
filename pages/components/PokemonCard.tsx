import React from "react";
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../graphql/get-pokemon';

export function PokemonCard({ id }) {

  const { error, data } = useQuery(GET_POKEMON, {
    variables: { id },
  });

  if (error) return `Error! ${error.message}`;
  const pokemon = data && data.getPokemon;
  if (pokemon)
    return (
      <div>
        <img src={pokemon.img} />
        <div>Name: {pokemon.name} </div>
        <div>Type: {pokemon.type.map(type => (<span key={type}> {type} </span>))} </div>
        <div>Height: {pokemon.height} </div>
        <div>Height: {pokemon.weight} </div>
        <div>Weaknesses: {pokemon.weaknesses.join(', ')} </div>
      </div>
    );
  return null;
}
