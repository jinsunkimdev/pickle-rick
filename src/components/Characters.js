import { Link } from "react-router-dom";
const Characters = ({ id, name, image, species }) => {
  return (
    <div className="text-center hover:scale-110 ease-in duration-200 mx-5 my-5">
      <Link className=" no-underline"to={`/${id}`} id={id}>
      <img className="w-full border-solid border-5 rounded-full  mx-auto my-0" src={image} alt={name} />
      <p className="text-3xl">{name}</p>
      </Link>
    </div>
  );
};

export default Characters;
