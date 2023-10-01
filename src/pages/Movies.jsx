import { useEffect, useState } from 'react';
import getFilms from '../service/api-request-film';
import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {

    const getQueryFilms = async () => {
      // setLoading(true);
      // try {
      const data = await getFilms('search/movie', query);
      setData(data);
      console.log(data);
      // }
      // catch (error) {
      //   console.log('error');
      // } finally {
      // setLoading(false);
      // }
    };

    getQueryFilms();
  }, [query]);


  const handleSearch = e => {
    const search = e.currentTarget.value.trim().toLowerCase();
    setSearch(search);
  };

  const handleSubmit = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('');
    setSearchParams({query: `${query}`})
  }
    console.log(searchParams.get('query'));


  return (
    <>
      <div>Movies!!!</div>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          name={'search'}
          value={search}
          autoComplete='off'
          autoFocus
          placeholder='Search movies'
          onChange={handleSearch}
        />
        <button
          type={'submit'}
        >
          {/*<Link to={`/movies?query=${query}`}>*/}
          Search
          {/*</Link>*/}
        </button>
      </form>


      <ul>
        {data && data.results.map(({title, id}) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>

        ))}
      </ul>
      <Outlet/>
    </>
  );
};

export default Movies;
