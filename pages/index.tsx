import Head from 'next/head';
import { PokemonsContainer } from './containers/Pokemons-container';

import Logo from '../ui/svg/pokemon-logo.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>Fullstack Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonsContainer />
    </>
  );
};

export default Home;
