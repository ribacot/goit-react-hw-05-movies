import {
  Link,
  useLocation,
  useSearchParams,
  useOutletContext,
} from 'react-router-dom';
import { useState, useRef, lazy, Suspense } from 'react';
import fetchSearchMovie from 'components/service/serviseSearchMovie';
import FormSearch from 'components/FormSearch/FormSearch';
import css from './Movies.module.css';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
const ListMovies = lazy(() => import('components/ListMovies/ListMovies'));

export default function Movies() {
  const [movies, setMovies] = useState({});
  const [serchParams, setSerchParams] = useSearchParams();

  const [padding] = useOutletContext();
  const location = useLocation();
  const backLincRef = useRef(location.state?.from ?? '/');
  let searchQwery = serchParams.get('searchQwery') ?? '';
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

  return (
    <div className="bacdrop">
      <section style={{ paddingTop: `${padding + 10}px` }}>
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
          <Suspense fallback={<h2>Loading...</h2>}>
            <ListMovies movies={movies.results} />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}
