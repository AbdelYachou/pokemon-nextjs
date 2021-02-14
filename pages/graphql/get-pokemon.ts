import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
query pokemon ($id: String!){
  getPokemon(uid: $id) {
    num
    name
    img
    type
    height
    weight
    weaknesses
  }
}
`;
