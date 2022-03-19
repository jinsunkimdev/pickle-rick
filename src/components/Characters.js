import { Link } from "react-router-dom";
const Characters = ({ id, name, image, species }) => {
  return (
    <div className=" group text-center hover:scale-110 ease-in duration-200 mx-5 my-5">
      <Link className="no-underline" to={`/${id}`} id={id}>
        <div className="relative ">
          <div className="absolute inset-0 bg-green-400 rounded-full blur-sm group-hover:blur-lg"></div>
          <img
            className="w-full relative rounded-full mx-auto my-0 drop-shadow-2xl"
            src={image}
            alt={name}
          />
        </div>
        <p className="text-3xl group-hover:text-green-400">{name}</p>
      </Link>
    </div>
  );
};

export default Characters;
