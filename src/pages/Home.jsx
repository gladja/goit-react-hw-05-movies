import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getFilms from '../service/api-request-film';
import MoviesList from '../components/MoviesList/MoviesList';
import { Loader } from '../components/Loader/Loader';


const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getDayFilms = async () => {
      setLoading(true);
      try {
        const data = await getFilms('trending/movie/day');
        setData(data.results);
      } catch (error) {
        // console.log('error');
      } finally {
        setLoading(false);
      }
    };
    getDayFilms();
    // setLoading(false);
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <Loader loading={loading} />
        <MoviesList data={data} location={location} />
      </main>
    </>
  );
};

export default Home;
