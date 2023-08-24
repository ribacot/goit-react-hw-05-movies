import { Link, useLocation } from 'react-router-dom';
import MovieItem from 'components/MovieItem/MovieItem';

export default function ListMovies({ movies }) {
  const location = useLocation();
  console.log(movies);
  return (
    <ul className="list_movie">
      {movies?.length ? (
        movies?.map(({ id, poster_path }) => (
          <li key={id} className="link">
            <Link to={`/selectedmovie/${id}`} state={{ from: location }}>
              <MovieItem img={poster_path} />
            </Link>
          </li>
        ))
      ) : (
        <h2>Not found</h2>
      )}
    </ul>
  );
}
