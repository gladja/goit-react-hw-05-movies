import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';
import { Img, Item, List } from './Cast.styled';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import img from '../../img/person.jpeg';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      setLoading(true);
      try {
        const data = await getFilms(`/movie/${movieId}/credits`);

        const makeData = data.cast.map(({ id, character, name, profile_path }) => (
             {
              id,
              character,
              name,
              profile_path: profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : img,
            }
          ));


        setData(makeData);
      } catch (error) {
        toast.error('Sorry ERROR. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {data && (data.length === 0) &&
        <p>We don't have any additional information for this movie.</p>}

      {data && (data.length > 0) && <h2>Additional information</h2>}
      <Loader loading={loading} />
      <List>
        {data &&
          data.map(({ id, character, name, profile_path }) => (
            <Item key={id}>
              <div>
                <Img>
                  <img
                    src={profile_path}
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
