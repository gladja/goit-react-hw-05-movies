import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';
import { Img, Item, List } from './Cast.styled';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';

const Cast = ({ movieId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      setLoading(true);
      try {
      const data = await getFilms(`/movie/${movieId}/credits`);
      setData(data);
      } catch (error) {
        toast.error('Sorry ERROR. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  // console.log(data);
  return (
    <>
      <h2>Additional information</h2>
      <Loader loading={loading} />
      <List>
        {data &&
          data.cast.map(({ id, character, name, profile_path }) => (
            <Item key={id}>
              <div>
                <Img>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width={'150'}
                    height={'225'}
                  />
                </Img>
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </div>
            </Item>
          ))}
      </List>
    </>
  );
};

export default Cast;
