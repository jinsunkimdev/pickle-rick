import { Link } from "react-router-dom";
const Characters = ({ id }) => {
  return (
    <div>
      <Link to={`/${id}`} id={id}>
        {id}
      </Link>
    </div>
  );
};

export default Characters;
