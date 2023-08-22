import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import fetchSearchMovie from 'components/service/serviseSearchMovie';
import FormSearch from 'components/FormSearch/FormSearch';
import css from './Movies.module.css';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';

export default function Movies() {
  const [movies, setMovies] = useState({});
  const [serchParams, setSerchParams] = useSearchParams();

  const location = useLocation();
  const backLincRef = useRef(location.state?.from ?? '/');
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
  };

  const memoQwery = useRef(searchQwery);
  useEffect(() => {
    fetchSearchMovie(memoQwery.current)
      .then(r => setMovies(r))
      .catch(e => console.log(e));
  }, [memoQwery]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className="bacdrop">
      <section className={css.section_search}>
        <Container>
          <Link to={backLincRef.current} className="navLink">
            <Button>Go back</Button>
          </Link>
          <h1 className={css.title}>Search Movies</h1>
          <FormSearch
            value={searchQwery}
            onChenge={onChenge}
            onSubmit={onSubmit}
          />
          <ul className="list_movie">
            {movies.total_results ? (
              movies.results.map(({ title, poster_path, id }) => {
                return (
                  <li key={id} className={css.link}>
                    <Link
                      to={`/selectedmovie/${id}`}
                      state={{ from: location }}
                    >
                      <div className={css.thumb_img}>
                        <img
                          src={
                            poster_path
                              ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                              : defaultImg
                          }
                          alt={title}
                          width={300}
                        />
                      </div>
                    </Link>
                  </li>
                );
              })
            ) : (
              <h2>Not found</h2>
            )}
          </ul>
        </Container>
      </section>
    </div>
  );
}
