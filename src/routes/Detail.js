import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
const GET_CHARACTER = gql`
  query getCharacter($id: Int!) {
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
        name
        type
        dimension
        residents {
          id
        }
      }
      location {
        name
        type
        dimension
        residents {
          id
        }
      }
    }
  }
`;
const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: parseInt(id) },
  });
  console.log(data);
  console.log(error);
  return "Detail";
};

export default Detail;
