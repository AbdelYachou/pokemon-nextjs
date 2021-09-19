import { gql } from "@apollo/client";

const GET_POKEMON = gql`
query pokemon ($id: String!){
  getPokemon(uid: $id) {
    num
    name
    img
    type
    height
    weight
    weaknesses
    prev_evolution {
     num
     name
    }
    next_evolution {
     num
     name
    }
  }
}
`;

export { GET_POKEMON };