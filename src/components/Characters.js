import { Link } from "react-router-dom";
const Characters = ({ id, name, image, species }) => {
  return (
    <div className="border-solid border-2 mx-auto my-auto">
      <Link className="no-underline"to={`/${id}`} id={id}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>species:{species}</h2>
      </Link>
    </div>
  );
};

export default Characters;
