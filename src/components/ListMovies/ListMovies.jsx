import { Link, useLocation } from 'react-router-dom';
import MovieItem from 'components/MovieItem/MovieItem';
import css from './ListMovies.module.css'

export default function ListMovies({ movies }) {
  const location = useLocation();
  console.log(movies)
  return (
    <ul className="list_movies">
      {movies?.length ? (
        movies?.map(({ id, poster_path,title }) => (
          <li key={id} className="link">
            <Link to={`/selectedmovie/${id}`} state={{ from: location }} className={css.linkMovie}>
              <MovieItem img={poster_path} title={title}/>
            </Link>
          </li>
        ))
      ) : (
        <h2>No movies</h2>
      )}
    </ul>
  );
}
