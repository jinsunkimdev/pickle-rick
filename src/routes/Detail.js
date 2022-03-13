import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Navbar from "../components/Navbar";
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
    <div className="flex flex-col h-screen font-sans bg-[#282a36]">
      <Navbar />
      <main className="flex justify-center bg-gradient-to-r duration-200 from-[#7493E9] to-[#ffb86c]  m-auto py-5 px-9 border-solid border-[#bd93f9] border-2 rounded-xl">
        <img
          className="w-1/3 mr-3 rounded-full border-solid border-[#bd93f9] border-4"
          src={characterData.image}
          alt={characterData.name}
        />
        <div className="ml-3">
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
          <h2>Status : {characterData.status}</h2>
        </div>
      </main>
    </div>
  );
};

export default Detail;
