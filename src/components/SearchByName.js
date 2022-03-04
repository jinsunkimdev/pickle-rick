const SearchByName= ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="inputName" onChange={handleChange} />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default SearchByName;
