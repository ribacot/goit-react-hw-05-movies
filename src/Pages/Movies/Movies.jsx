import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import fetchSearchMovie from 'components/service/serviseSearchMovie';
import FormSearch from 'components/FormSearch/FormSearch';
import css from './Movies.module.css';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import ListMovies from 'components/ListMovies/ListMovies';

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

  // const memoQwery = useRef(searchQwery);
  // useEffect(() => {
  //   fetchSearchMovie(memoQwery.current)
  //     .then(r => setMovies(r))
  //     .catch(e => console.log(e));
  // }, [memoQwery]);

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
          <ListMovies movies={movies.results} />
        </Container>
      </section>
    </div>
  );
}
