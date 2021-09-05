import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
query pokemons {
  getPokemons {
    id
    num
    name
    img
  }
}
`;
