import Head from 'next/head';

import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './graphql/get-pokemons';
import Logo from '../ui/svg/pokemon-logo.svg';

const Home = () => {
  const { error, data } = useQuery(GET_POKEMONS);

  if (error) return `Error! ${error.message}`;
  if (data)
    return (
      <>
        <Head>
          <title>Fullstack Test</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <ul>
            {data.getPokemons.map(pokemon => (
              <li key={pokemon.id}>
                <button value={pokemon.num}>
                  {pokemon.img}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  return null;
};

export default Home;
