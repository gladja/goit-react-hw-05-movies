import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, useState } from 'react';

//Lazy
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


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
