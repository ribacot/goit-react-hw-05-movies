import serviseTrandingMovies from 'components/service/serviseTrandingMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './TrandingMovies.module.css';
import TradingItem from './TradingItem/TradingItem';
import Container from 'components/Container/Container';

export default function TrandingMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    serviseTrandingMovies()
      .then(r => setMovies(r))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="bacdrop">
      <section className={css.section_tranding}>
        <Container>
          <div className={css.bacdrop}>
            <h1 className={css.title}>Trending Movies</h1>
            <ul className="list_movie">
              {movies.map(({ id, poster_path }) => (
                <li key={id} className={css.link}>
                  <Link to={`selectedmovie/${id}`} state={{ from: location }}>
                    <TradingItem img={poster_path} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
