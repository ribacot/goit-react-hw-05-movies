import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import serviseTrandingMovies from 'components/service/serviseTrandingMovies';
import css from './TrandingMovies.module.css';
import Container from 'components/Container/Container';
import ListMovies from 'components/ListMovies/ListMovies';

export default function TrandingMovies() {
  const [movies, setMovies] = useState([]);
  const [padding] = useOutletContext();

  useEffect(() => {
    if (movies.length) return;
    serviseTrandingMovies()
      .then(r => setMovies(r))
      .catch(e => console.log(e));
  }, [movies.length]);
  
  return (
    <div className="bacdrop">
      <section style={{ paddingTop: `${padding + 10}px` }}>
        <Container>
          <h1 className={css.title}>Trending Movies</h1>
          {!!movies.length && <ListMovies movies={movies} />}
        </Container>
      </section>
    </div>
  );
}
