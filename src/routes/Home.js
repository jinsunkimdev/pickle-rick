import Navbar from "../components/Navbar";
//Home page
const Home = () => {
  return (
    <main className="font-sans h-screen no-underline bg-[#4B7737] bg-[url('/public/img/rickandmorty-wallpaper.jpg')] bg-contain bg-center bg-no-repeat">

      <Navbar />
      <div className="h-1/4 text-center "></div>
      <div className="flex justify-around px-[15em] z-20">
          <div className="h-[13em] w-[13em] relative skew-y-12 shadow-lg ">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick"
              className="absolute h-full w-full inset-0 rounded-lg shadow-2xl"
            ></img>
            <div className="transform hover:rotate-90 hover:-translate-x-full hover:scale-125 transition duration-300">
              <div className="h-[13em] w-[13em] rounded-lg shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[13em] w-[13em] bg-white text-black rounded-lg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex items-center text-[13em] z-0 bg-gradient-to-r text-transparent bg-clip-text duration-100 from-[#FDEEBF] via-[#00B1D4] to-[#72A85E] animate-gradient-x transition">AND</p>
          <div className="h-[12em] w-[12em] relative -skew-y-12 shadow-lg z-20">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
              alt="Rick"
              className="absolute inset-0  rounded-lg shadow-2xl"
            ></img>
            <div className="transform hover:-rotate-90 hover:translate-x-full hover:scale-125 transition duration-300">
              <div className="h-[12em] w-[12em] text-white rounded-lg shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[12em] w-[12em] bg-black rounded-lg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default Home;
