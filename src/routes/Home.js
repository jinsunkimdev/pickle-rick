import Navbar from "../components/Navbar";
//Home page
const Home = () => {
  return (
    <main className="font-sans no-underline bg-[#282a36]">
      <Navbar />
      <div className="flex justify-center min-h-screen">
        <div className="h-32 w-32 relative skew-y-12 shadow-green-300 shadow-lg ">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick"
            className="absolute inset-0  rounded-lg shadow-2xl"
          ></img>
          <div className="transform hover:rotate-90 hover:-translate-x-full hover:scale-125 transition duration-300">
            <div className="h-32 w-32 bg-white rounded-lg shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="bg-black rounded-lg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
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
