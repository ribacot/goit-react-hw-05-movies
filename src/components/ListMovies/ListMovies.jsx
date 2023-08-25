import { Link, useLocation } from 'react-router-dom';
import MovieItem from 'components/MovieItem/MovieItem';

export default function ListMovies({ movies }) {
  const location = useLocation();
  return (
    <ul className="list_movies">
      {movies?.length ? (
        movies?.map(({ id, poster_path }) => (
          <li key={id} className="link">
            <Link to={`/selectedmovie/${id}`} state={{ from: location }}>
              <MovieItem img={poster_path} />
            </Link>
          </li>
        ))
      ) : (
        <h2>No movies</h2>
      )}
    </ul>
  );
}
