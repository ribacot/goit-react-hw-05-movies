import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Movies from 'Pages/Movies/Movies'
// import SelectedMovie from 'Pages/SelectedMovie/SelectedMovie';
import { lazy } from 'react';
// const TrandingMovies = lazy(() =>
//   import('Pages/TrandingMovies/TrandingMovies')
// );
import TrandingMovies from 'Pages/TrandingMovies/TrandingMovies';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SelectedMovie = lazy(() => import('Pages/SelectedMovie/SelectedMovie'));
const Movies = lazy(() => import('Pages/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrandingMovies />} />
        <Route path="movie" element={<Movies />} />
        <Route path="selectedmovie/:id" element={<SelectedMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>STOP</div>} />
      </Route>
    </Routes>
  );
};
