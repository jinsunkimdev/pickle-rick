const SearchByInput = ({ handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center text-center align-center mb-3"
    >
      <input
        className="w-1/3 py-2 px-3 border-solid border-2 border-[#50fa7b] rounded-md bg-black text-2xl caret-[#50fa7b]"
        type="text"
        placeholder="Input Character Name"
        name="inputName"
        onChange={handleChange}
        autoComplete="off"
      />
      <div className="relative">
        <div className="absolute py-4 px-4 inset-0 bg-[#50fa7b] blur-md"></div>
        <button
          className="relative py-3 px-4 ml-2 rounded-md bg-[#282a36]  hover:scale-110 ease-in duration-100"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              className="text-purple-300"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchByInput;
