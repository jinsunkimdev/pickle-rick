import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Navbar from "../components/Navbar"
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      episode {
        id
      }
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
    }
  }
`;
const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: parseInt(id) },
  });
  console.log(loading, data, error);
  if (loading) return <p>Loading...</p>;
  const characterData = data.character;
  return (
    <div>
      <Navbar/>
      <img src={characterData.image} alt={characterData.name} />
      <h1>Name : {characterData.name}</h1>
      <h2>Species : {characterData.species}</h2>
      <h2>Gender : {characterData.gender}</h2>
      <h2>
        Origin : {characterData.origin.name} - {characterData.origin.type}
      </h2>
      <h2>
        Current Location : {characterData.location.name} -{" "}
        {characterData.location.type}
      </h2>
      <h2>Status(spoiler alert!) : {characterData.status}</h2>
    </div>
  );
};

export default Detail;
