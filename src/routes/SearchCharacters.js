import React, { useState } from "react";
import Characters from "../components/Characters";
import SearchByInput from "../components/SearchByInput";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import ErrorPage from "../components/404";
import { RevolvingDot } from "react-loader-spinner";

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
const SearchCharacters = () => {
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
  if (loading)
    return (
      <section className="relative min-w-screen min-h-screen bg-[url('/public/img/stars.jpeg')]">
        <div className="absolute top-1/2 left-1/2">
          <RevolvingDot
            height="200"
            width="200"
            color="yellow"
            ariaLabel="loading"
          />
        </div>
      </section>
    );
  if (error) return <ErrorPage />;
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
    <main className="font-sans bg-gray-800 min-h-full">
      <Navbar />
      <SearchByInput handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="grid grid-cols-5 text-white">
        {charactersData.map((character) => (
          <Characters
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
          />
        ))}
      </div>
      <Pagination
        page={page}
        totalItems={totalItems}
        handlePageChange={handlePageChange}
      />
    </main>
  );
};

export default SearchCharacters;
