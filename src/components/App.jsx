import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import { useState } from 'react';
import Reviews from './Reviews/Reviews';

export const App = () => {
  const [movieId, setMovieId] = useState();

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/movies'}>Movies</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          {/*<Route path='/movies?query=:query' element={<Movies />} />*/}
          <Route path='/movies/:movieId/'
                 element={<MovieDetails setMovieId={setMovieId} />}
          >
            <Route path='cast' element={<Cast movieId={movieId} />} />
            <Route path='reviews' element={<Reviews movieId={movieId} />} />
          </Route>
        </Routes>
      </div>

      <ToastContainer autoClose={3000} theme='colored' position='top-center' />
    </>
  );
};
