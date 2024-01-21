import { Link, useLocation } from 'react-router-dom';
import MovieItem from 'components/MovieItem/MovieItem';
import css from './ListMovies.module.css'

export default function ListMovies({ movies }) {
  const location = useLocation();
  console.log(movies)
  return (
    <ul className="list_movies">
      {movies?.length ? (
        movies?.map((movie) => (
          <li key={movie.id} className="link">
            <Link to={`/selectedmovie/${movie.id}`} state={{ from: location }} className={css.linkMovie}>
              <MovieItem movie={movie}/>
            </Link>
          </li>
        ))
      ) : (
        <h2>No movies</h2>
      )}
    </ul>
  );
}
