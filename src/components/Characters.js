import { Link } from "react-router-dom";
const Characters = ({ id, name, image, species }) => {
  return (
    <div>
      <Link to={`/${id}`} id={id}>
        {name}
      </Link>
      <img src={image} alt={name} />
    </div>
  );
};

export default Characters;
