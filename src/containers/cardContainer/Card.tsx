import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@graphql/get-pokemon";
import { PokemonCard, Navigation, PokeballCard } from "@components";

interface Props {
  id?: string;
  navigationCallback?: (x?: string) => void;
}

const Card: React.FC<Props> = ({ id, navigationCallback }: Props) => {
  const tagName = navigationCallback ? ' Pokemon' : 'n Evolution'
  if (!id) {
    return (
      <PokeballCard>
        <p>Select a{tagName}</p>
      </PokeballCard>
    );
  }

  const { data, error, loading } = useQuery(GET_POKEMON, { variables: { id } });
  if (error) return <>`Error! ${error.message}`</>;
  if (loading) return <>Loading...</>;

  const pokemon = data?.getPokemon;
  if (!pokemon) return null;

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      {navigationCallback && (
        <Navigation pokemon={pokemon} onChange={navigationCallback} />
      )}
    </div>
  );
};

export default Card;
