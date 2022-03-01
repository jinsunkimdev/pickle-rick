import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
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
    variables: { id: +id },
  });
  console.log(typeof id, id);
  console.log(loading, data, error);
  if (loading) return <p>Loading...</p>;
  return <h1>Hello {data.character.id}</h1>;
};

export default Detail;
