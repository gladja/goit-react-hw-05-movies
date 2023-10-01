import { Link } from 'react-router-dom';
import { Item, List } from './MoviesList.styled';

const MoviesList = ({data, location}) => {

  return (
    <>
      <List>
        {data &&
          data.map(({ title, id }) => (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Item>
          ))}
      </List>
    </>
  )
}

export default MoviesList;
