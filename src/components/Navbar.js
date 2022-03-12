import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex relative bg-gradient-to-r shadow-xl mb-3 duration-200 from-[#50fa7b] via-[#B8AEF7] to-[#f3bf99] animate-gradient-x">
      <Link
        to={`/`}
        className="flex w-1/3 justify-center my-0 mx-auto items-center no-underline align-center relative"
      >
        <img
          className="w-1/5 justify-center p-2 hover:animate-spin"
          src="img/rick-pickle.png"
          alt="navbar"
        />
        <h1 className="text-6xl items-center transition hover:text-[#50fa7b] hover:ease-linear duration-400">
          Pickle Rick
        </h1>
      </Link>
      <a
        href="https://github.com/jinsunkimdev"
        className="absolute right-3 bottom-2"
      >
        <FontAwesomeIcon icon={faGithub} className="fa-xl hover:scale-110" />
      </a>
    </nav>
  );
};
export default Navbar;
