import { NavLink, Route, Routes, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';
import Cast from '../Cast/Cast';

const MovieDetails = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await getFilms(`movie/${movieId}`);
      // console.log(data);
      setData(data);
    };
    getMovieDetails();
  }, [movieId]);

  // console.log(data);

  return (
    <>
      {data &&
        <>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
          <h2>{data.original_title}</h2>
          <p>User Score: {Math.floor(data.vote_average * 10)}%</p>
          <p>Overview</p>
          <p>{data.overview}</p>
          <p>Genres</p>
          {data.genres.map(({ name, id }) => (
            <div key={id}>{name}</div>
          ))}
        </>
      }

      {/*<Cast movieId={movieId}/>*/}

      <NavLink to={`/movies/${movieId}/credits`}>Cast</NavLink>

      {/*<Routes>*/}
      {/*  <Route path='/movies/:movieId/credits' element={<Cast />} />*/}
      {/*</Routes>*/}
      <Outlet />
    </>
  );
};

export default MovieDetails;
