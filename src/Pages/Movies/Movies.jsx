import FormSearch from 'components/FormSearch/FormSearch';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import fetchSearchMovie from 'components/service/serviseSearchMovie';

export default function Movies() {
  const [movies, setMovies] = useState({});
  const [serchParams, setSerchParams] = useSearchParams();

  const location = useLocation();
  const searchQwery = serchParams.get('searchQwery') ?? '';

  const onChenge = e => {
    const nextParams = e.target.value;
    if (nextParams === '') return setSerchParams({});
    setSerchParams({ searchQwery: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    fetchSearchMovie(searchQwery)
      .then(r => setMovies(r))
      .catch(e => console.log(e));
    console.log('submit');
  };
  const memoQwery = useRef(searchQwery);
  useEffect(() => {
    fetchSearchMovie(memoQwery.current)
      .then(r => setMovies(r))
      .catch(e => console.log(e));
  }, [memoQwery]);

  console.log('search_movies: ', movies);

  console.log('Movies');
  return (
    <>
      <h1>Movies</h1>
      <FormSearch value={searchQwery} onChenge={onChenge} onSubmit={onSubmit} />
      <ul>
        {movies.total_results ? (
          movies.results.map(({ title, poster_path, id }) => {
            return (
              <li key={id}>
                <Link to={`/selected_movie/${id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                    alt={title}
                  />
                  <h3>{title}</h3>
                </Link>
              </li>
            );
          })
        ) : (
          <h2>Not found</h2>
        )}
      </ul>
    </>
  );
}
