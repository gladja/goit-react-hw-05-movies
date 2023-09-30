import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';

const Cast = ({ movieId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMovieCast = async () => {
      const data = await getFilms(`/movie/${movieId}/credits`);
      setData(data);
    };
    getMovieCast();
  }, [movieId]);

  // console.log(data);
  return (
    <>
      <div>Additional information</div>
      <ul>
        {data &&
          data.cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt=""
                  width={'100px'}
                />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
