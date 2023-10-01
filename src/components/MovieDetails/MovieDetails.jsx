import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import getFilms from '../../service/api-request-film';
import { BtnBack, Item, List, Title, Wrap, WrapText, ListGenre } from './MovieDetails.styled';

const MovieDetails = ({ setMovieId }) => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocal = useRef(location.state?.from ?? '/movies');

  console.log(backLinkLocal.current);
  // console.log(location);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await getFilms(`movie/${movieId}`);
      setData(data);
      setMovieId(movieId);
    };
    getMovieDetails();
  }, [movieId, setMovieId]);

  return (
    <main>
      {data && (
        <Wrap>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=''
            width={'200px'}
          />

          <WrapText>
            <h2>{data.original_title}</h2>
            <Title>User Score: <span>{Math.floor(data.vote_average * 10)}%</span></Title>
            <Title>Overview</Title>
            <p>{data.overview}</p>
            <Title>Genres</Title>
            <ListGenre>
              {data.genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ListGenre>
          </WrapText>
        </Wrap>
      )}
      <List>
        <Item>
          <BtnBack>
            <Link to={backLinkLocal.current}>Go back</Link>
          </BtnBack>
        </Item>
        <Item>
          <NavLink to={'cast'}>Cast</NavLink>
        </Item>
        <Item>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </Item>
      </List>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
