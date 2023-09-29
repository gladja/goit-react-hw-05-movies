import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';

const Cast = ({ movieId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await getFilms(`movie/${movieId}/credits`);
      // console.log(data);
      setData(data);
    };
    getMovieDetails();
  }, [movieId]);

  console.log(data);

  return (
    <>
      <div>Additional information</div>
      Cast
    </>
  );
};

export default Cast;
