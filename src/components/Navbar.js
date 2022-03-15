import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-full relative mb-3 py-2 font-fredoka border-solid border-b-[0.1px] border-gray-500">
      <Link
        to={`/`}
        className="flex w-1/3 justify-center items-center no-underline align-center relative"
      >
        <img
          className="w-1/5 justify-center p-2 hover:animate-spin"
          src="img/rick-pickle.png"
          alt="pickle rick"
        />
        <h1 className="text-5xl items-center bg-gradient-to-r text-transparent bg-clip-text duration-200 from-[#50fa7b] via-[#B8AEF7] to-[#f3bf99] animate-gradient-x transition hover:text-[#50fa7b] hover:ease-linear duration-400">
          Pickle Rick
        </h1>
      </Link>
		<Link to={'/characters'} className="flex text-2xl justify-center items-center w-[10%] no-underline"><h2>Characters</h2></Link>
		<Link to={'/episodes'} className="flex text-2xl justify-center items-center w-[10%] no-underline"><h2>Episodes</h2></Link>
      <a
        href="https://github.com/jinsunkimdev"
        className="absolute right-6 bottom-2"
      >
        <FontAwesomeIcon icon={faGithub} className="fa-xl hover:scale-110" />
      </a>
    </nav>
  );
};
export default Navbar;
