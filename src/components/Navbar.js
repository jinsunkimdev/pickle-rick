import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 w-full z-10 mb-3 py-2 font-fredoka shadow-md bg-opacity-25">
      <Link
        to={`/`}
        className="flex w-[18%] items-center align-center relative"
      >
        <img
          className="w-[3em] justify-center p-2 hover:animate-spin"
          src="img/rick-pickle.png"
          alt="pickle rick"
        />
        <h1 className="text-4xl items-center bg-gradient-to-r text-transparent bg-clip-text duration-200 from-[#50fa7b] via-[#B8AEF7] to-[#f3bf99] animate-gradient-x transition hover:text-[#50fa7b] hover:ease-linear duration-400">
          Pickle Rick
        </h1>
      </Link>
      <Link
        to={"/characters"}
        className="flex text-sm mx-[1em] justify-center items-center"
      >
        <h2 className="text-xl">Characters</h2>
      </Link>
      <Link
        to={"/episodes"}
        className="flex text-sm mx-[1em] justify-center items-center"
      >
        <h2 className="text-xl">Episodes</h2>
      </Link>
      <a
        href="https://github.com/jinsunkimdev"
        className="absolute right-6 bottom-2 text-black"
      >
        <FontAwesomeIcon icon={faGithub} className="fa-xl hover:scale-110" />
      </a>
    </nav>
  );
};
export default Navbar;
