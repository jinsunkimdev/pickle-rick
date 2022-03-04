import React, { useState } from "react";
import Characters from "../components/Characters";
import SearchByName from "../components/SearchByName";
import Pagination from "../components/Pagination";
import { useQuery, gql } from "@apollo/client";
//Grapql query
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
//Home page
const Home = () => {
  //Set useState
  const [page, setPage] = useState(1);
  const [characterName, setCharacterName] = useState({
    name: "",
    value: "",
  });
  //Fetch data by graphql
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { pageNum: page, characterName: characterName.name },
  });
  //When loading, error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  //Variables for components
  const totalItems = data.characters.info.count;
  const charactersData = data.characters.results;
  //Function for componenets
  const handlePageChange = (page) => {
    setPage(page);
  };
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

  return (
    <main>
      <SearchByName handleChange={handleChange} handleSubmit={handleSubmit} />
      {charactersData.map((character) => (
        <Characters
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
        />
      ))}
      ;
      <Pagination
        page={page}
        totalItems={totalItems}
        handlePageChange={handlePageChange}
      />
    </main>
  );
};

export default Home;
