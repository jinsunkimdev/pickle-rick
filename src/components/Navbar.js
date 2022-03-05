import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="flex justify-center bg-gradient-to-r duration-200 from-[#aad1b6] via-[#c7b9ff] to-[#f3bf99] animate-gradient-x">
		<Link to={`/`}><img className="w-2/12 p-3 hover:animate-spin" src="img/rick-pickle.png" alt="navbar"/></Link>	
		</nav>
	)
}
export default Navbar;