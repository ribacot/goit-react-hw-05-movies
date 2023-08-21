import serviseTrandingMovies from 'components/service/serviseTrandingMovies';
import { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './TrandingMovies.module.css';
import TradingItem from './TradingItem/TradingItem';
import Container from 'components/Container/Container';

export default function TrandingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [bg, setBg] = useState('');
  const location = useLocation();

  const trendingMoviesMemo = useMemo(() => {
    const bg = trendingMovies[0] ? trendingMovies[0].backdrop_path : '';
    return bg;
  }, [trendingMovies]);
  // console.log(trendingMoviesRef.current);
  useEffect(() => {
    serviseTrandingMovies()
      .then(r => setTrendingMovies(r))
      .catch(e => console.log(e));
    setBg(trendingMoviesMemo);
  }, [trendingMoviesMemo]);
  const bgPath = `https://image.tmdb.org/t/p/w500/${bg}`;
  // const bg=trendingMovies[0].backdrop_path??""
  console.log('bg:', bgPath);

  return (
    <div
      className="bacdrop"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),url(${bgPath})`,

        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
      }}
    >
      <section
        className={css.section_tranding}
      >
        <Container>
          <div className={css.bacdrop}>
            <h1 className={css.title}>Trending Movies</h1>
            <ul className="list_movie">
              {trendingMovies.map(({ id, poster_path }) => (
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
