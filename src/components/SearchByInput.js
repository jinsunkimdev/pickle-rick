const SearchByInput= ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input className="w-1/3 py-3 px-5 border-solid border-2 border-lime-300 rounded-md " type="text" placeholder="Input Character Name" name="inputName" onChange={handleChange} />
      <button className="py-3 px-4 ml-2 rounded-md text-yellow-50 bg-lime-600" type="submit">SEARCH</button>
    </form>
  );
};

export default SearchByInput;
