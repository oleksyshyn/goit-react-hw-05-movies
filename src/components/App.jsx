import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  );
};

export default App;