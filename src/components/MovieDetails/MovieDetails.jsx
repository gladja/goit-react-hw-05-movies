import { NavLink, useParams, Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';

const MovieDetails = ({ setMovieId }) => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await getFilms(`movie/${movieId}`);
      setData(data);
      setMovieId(movieId);
    };
    getMovieDetails();
  }, [movieId, setMovieId]);

  return (
    <>
      <button><Link to={'/'}>Go back</Link></button>
      {data && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=''
            width={'150px'}
          />
          <h2>{data.original_title}</h2>
          <p>User Score: {Math.floor(data.vote_average * 10)}%</p>
          <p>Overview</p>
          <p>{data.overview}</p>
          <p>Genres</p>
          {data.genres.map(({ name, id }) => (
            <div key={id}>{name}</div>
          ))}
        </>
      )}
      <ul>
        <li>
          <NavLink to={'cast'}>Cast</NavLink>
          {/*<NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>*/}
        </li>
        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
          {/*<NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>*/}
        </li>

      </ul>
      <Outlet/>
    </>
  );
};

export default MovieDetails;
