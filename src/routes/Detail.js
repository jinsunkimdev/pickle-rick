import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Navbar from "../components/Navbar";
import { RevolvingDot } from "react-loader-spinner";
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
  const characterData = data.character;
  return (
    <div className="flex flex-col h-screen font-sans bg-[url('/public/img/stars.jpeg')]">
      <Navbar />
      <svg
        className="absolute left-1/4 right-1/4 z-0 w-[55%]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#17026E"
          d="M39.8,-46.3C52.1,-37,63.1,-25.1,70.4,-8.7C77.6,7.6,81.2,28.2,73.4,43.1C65.7,57.9,46.6,66.8,28.7,69.1C10.8,71.3,-5.9,66.8,-23.2,61.4C-40.4,56.1,-58.2,50,-61.3,38.4C-64.3,26.8,-52.8,9.8,-45.8,-4.3C-38.8,-18.4,-36.4,-29.5,-29.6,-39.6C-22.7,-49.8,-11.3,-59.1,1.2,-60.5C13.7,-61.9,27.4,-55.5,39.8,-46.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <main className="flex z-10 justify-center bg-[rgba( 255, 255, 255, 0.55 )] m-auto py-9 px-9 border-solid border-[#bd93f9] border-2 rounded-xl">
        <img
          className="w-1/3 mr-3 rounded-full border-solid border-[#bd93f9] bg-blur-[2.5px] border-4"
          src={characterData.image}
          alt={characterData.name}
        />
        <div className=" ml-3 text-3xl leading-snug text-white">
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
