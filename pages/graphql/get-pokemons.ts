import { gql } from "@apollo/client";

const GET_POKEMONS = gql`
query pokemons {
  getPokemons {
    id
    num
    name
    img
  }
}
`;

export { GET_POKEMONS };