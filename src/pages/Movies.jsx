import { useEffect, useState } from 'react';
import getFilms from '../service/api-request-film';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';

const Movies = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  // const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const searchQuery = searchParams.get('query'); // ?? ''
  const location = useLocation();

  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    const getQueryFilms = async () => {
      const data = await getFilms('search/movie', query);
      setData(data);
    };

    getQueryFilms();
  }, [query]);

  const handleSearch = e => {
    const search = e.currentTarget.value.trim().toLowerCase();
    setSearch(search);
    setSearchParams({ query: `${search}` });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
    // setSearch('');
  };
  // console.log(data);
  // console.log(searchParams.get('query'));
  // console.log(location);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          name={'search'}
          value={searchQuery}
          // value={search}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleSearch}
        />
        <button
          type={'submit'}
          // onClick={() => setSearchParams({ query: `${search}` })}
        >
          Search
        </button>
      </form>

      <ul>
        {data &&
          data.results.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
