import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const Home = () => {
  let { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(loading);
  console.log(error);
  console.log(data);
  return <div>Home</div>;
};
export default Home;
