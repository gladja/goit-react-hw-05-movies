import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
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
      <Routes>
        <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route
              path='/movies/:movieId/'
              element={<MovieDetails setMovieId={setMovieId} />}
            >
              <Route path='cast' element={<Cast movieId={movieId} />} />
              <Route path='reviews' element={<Reviews movieId={movieId} />} />
            </Route>
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} theme='colored' position='top-center' />
    </>
  );
};
