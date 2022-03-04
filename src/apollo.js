import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_RICKANDMORTY_API,
  cache: new InMemoryCache(),
});

export default client;