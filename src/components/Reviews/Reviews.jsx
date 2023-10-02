import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';
import { Item, List, Text, Title } from './Reviews.styled';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

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
      {(data?.results.length > 0) && <h2>Additional information</h2>}
      <Loader loading={loading} />
      {(data?.results.length === 0) &&
        <p>We don't have any reviews for this movie.</p>}
      <List>
        {data && data.results.map(({ id, author, content }) => (
          <Item key={id}>
            <Title>Author: {author}</Title>
            <Text>{content}</Text>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Reviews;

