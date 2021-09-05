import type { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";

import client from "../services/apollo-client";
import GlobalStyle from "../ui/globals";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Head>
        <title>Pokemon Index</title>
        <meta
          name="description"
          content="Pokedex is a Pokemon Index, allow users to check the information of a pokemon and their evolutions"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        ></meta>
        <link rel="apple-touch-icon" href="/icon.png"></link>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
