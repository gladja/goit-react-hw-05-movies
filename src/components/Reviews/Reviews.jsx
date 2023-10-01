import { useEffect, useState } from 'react';
import getFilms from '../../service/api-request-film';

const Reviews = ({ movieId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMovieReviews = async () => {
      const data = await getFilms(`/movie/${movieId}/reviews`);
      setData(data);
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {(data?.results.length === 0) &&
        <p>We don't have any reviews for this movie.</p>}
      <ul>
        {data && data.results.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;

