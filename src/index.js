import React, { useState, useEffect } from "react";
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
import Pagination from "react-js-pagination";
import Characters from "./components/Characters";

const client = new ApolloClient({
  uri: process.env.REACT_APP_RICKANDMORTY_API,
  cache: new InMemoryCache(),
});

const GET_CHARACTERS = gql`
  query GetCharactersData($pageNum: Int!, $characterName: String!) {
    characters(page: $pageNum, filter: { name: $characterName }) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        image
        species
      }
    }
  }
`;
export const GetCharactersPages = () => {
  const [page, setPage] = useState(1);
  const [characterName, setCharacterName] = useState({
    name: "",
    value: "",
  });
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { pageNum: page, characterName: characterName.name },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const totalItems = data.characters.info.count;
  const HandlePageChange = (page) => {
    setPage(page);
  };
  const charactersData = data.characters.results;
  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacterName((prev) => {
      return { ...prev, name: prev.value };
    });
  };
  const handleChange = (e) => {
    setCharacterName((prev) => {
      return { ...prev, value: e.target.value };
    });
  };
  const Character = () => {
    return charactersData.map((character) => (
      <Characters
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
      />
    ));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="inputName" onChange={handleChange} />
        <button type="submit">SUBMIT</button>
      </form>
      <Character />
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={totalItems}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={HandlePageChange}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
