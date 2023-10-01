import { useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import getFilms from '../service/api-request-film';
import MoviesList from '../components/MoviesList/MoviesList';
import SearchForm from '../components/SearchForm/SearchForm';
import { Loader } from '../components/Loader/Loader';


const Movies = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const searchQuery = searchParams.get('query'); // ?? ''
  const location = useLocation();

  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    const getQueryFilms = async () => {
      setLoading(true);
      try {
      const data = await getFilms('search/movie', query);
      setData(data);
      } catch (error) {
        toast.error('Sorry ERROR. Please try again.');
      } finally {
        setLoading(false);
      }
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

    if (search === '') {
      return toast.warn('Sorry, type search query. Please try again.');
    }

    if (query === search) {
      return toast.warn('Sorry! double search query. Please try again.');
    }
    setQuery(search);
  };

  return (
    <>
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />
        <MoviesList
          data={data?.results}
          location={location}
        />
        <Loader loading={loading} />
        <Outlet />
      </main>
    </>
  );
};

export default Movies;
