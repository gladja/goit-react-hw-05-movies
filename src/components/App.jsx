import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';


export const App = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/movies'}>Movies</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<div>MovieDetails</div>} />
        </Routes>
      </div>
      <h1>
        hello
      </h1>
    </>
  );
};
