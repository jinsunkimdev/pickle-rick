const SearchByInput= ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex justify-center text-center align-center mb-3">
      <input className="w-1/3 py-2 px-3 border-solid border-2 border-lime-300 rounded-md text-2xl" type="text" placeholder="Input Character Name" name="inputName" onChange={handleChange} autoComplete="off"/>
      <button className="py-2 px-4 ml-2 rounded-md text-yellow-50 bg-lime-600" type="submit">SEARCH</button>
    </form>
  );
};

export default SearchByInput;
