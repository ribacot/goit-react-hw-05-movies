import serviseTrandingMovies from 'components/service/serviseTrandingMovies';
import { useEffect, useState } from 'react';
import css from './TrandingMovies.module.css';
import Container from 'components/Container/Container';
import ListMovies from 'components/ListMovies/ListMovies';

export default function TrandingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length) return;
    serviseTrandingMovies()
      .then(r => setMovies(r))
      .catch(e => console.log(e));
  }, [movies.length]);
  return (
    <div className="bacdrop">
      <section className={css.section_tranding}>
        <Container>
          <div className={css.bacdrop}>
            <h1 className={css.title}>Trending Movies</h1>
            {!!movies.length && <ListMovies movies={movies} />}
          </div>
        </Container>
      </section>
    </div>
  );
}
