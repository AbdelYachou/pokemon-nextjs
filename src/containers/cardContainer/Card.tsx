import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@graphql/get-pokemon";
import { PokemonCard, Navigation, PokeballCard } from "@components";

interface Props {
  id?: string;
  navigationCallback?: (x?: string) => void;
}

const SelectedCard: React.FC<Props> = ({ id, navigationCallback }: Props) => {
  if (!id) {
    return (
      <PokeballCard>
        <p>Select a Pokemon</p>
      </PokeballCard>
    );
  }

  const { error, data } = useQuery(GET_POKEMON, { variables: { id } });
  if (error) return <> `Error! ${error.message}` </>;

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

export default SelectedCard;
