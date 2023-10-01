const SearchForm = ({handleSubmit, searchQuery, handleSearch}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          value={searchQuery}
          autoComplete='off'
          autoFocus
          placeholder='Search movies'
          onChange={handleSearch}
        />
        <button
          type={'submit'}
        >
          Search
        </button>
      </form>
    </>
  )
}

export default SearchForm;
