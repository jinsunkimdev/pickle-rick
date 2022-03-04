import { Link } from "react-router-dom";
const Characters = ({ id, name, image, species }) => {
  return (
    <div>
      <Link to={`/${id}`} id={id}>
        <h1>{name}</h1>
      </Link>
      <img src={image} alt={name} />
      <h2>species:{species}</h2>
    </div>
  );
};

export default Characters;
