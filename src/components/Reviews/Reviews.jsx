import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';
import { List } from './Reviews.styled';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';

const Reviews = ({ movieId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieReviews = async () => {
      setLoading(true);
      try {
      const data = await getFilms(`/movie/${movieId}/reviews`);
      setData(data);
      } catch (error) {
        toast.error('Sorry ERROR. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      <Loader loading={loading} />
      {(data?.results.length === 0) &&
        <p>We don't have any reviews for this movie.</p>}
      <List>
        {data && data.results.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </List>
    </>
  );
};

export default Reviews;

