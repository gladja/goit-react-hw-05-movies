import { useEffect, useState } from 'react';
import getFilms from '../service/api-request-film';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getDayFilms = async () => {
      // setLoading(true);
      // try {
      const data = await getFilms('trending/movie/day');
      setData(data.results);
      // }
      // catch (error) {
      //   console.log('error');
      // } finally {
      // setLoading(false);
      // }
    };
    getDayFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {data &&
          data.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
