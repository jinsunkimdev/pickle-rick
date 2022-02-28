import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Characters from "./components/Characters";

const client = new ApolloClient({
  uri: process.env.REACT_APP_RICKANDMORTY_API,
  cache: new InMemoryCache(),
});

const GET_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export const GetCharactersData = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.characters.results);
  const charactersData = data.characters.results;
  return charactersData.map((character) => (
    <Characters
      key={character.id}
      id={character.id}
      name={character.name}
      image={character.iamge}
      species={character.species}
    />
  ));
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
