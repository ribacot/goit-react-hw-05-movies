import serviseTrandingMovies from 'components/service/serviseTrandingMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './TrandingMovies.module.css';
import TradingItem from './TradingItem/TradingItem';

export default function TrandingMovies() {
  const [trendingMovies, setterendingMovies] = useState([]);
  const location = useLocation();
  const [bgImg, setBgImg] = useState('');

  const bgPath = () => {
    trendingMovies.reduce((acc, el, idx) => {
      if (!idx) {
        if (!el.backdrop_path) return;
        console.log('el', el.backdrop_path);
        // console.log(acc);
        setBgImg(el.backdrop_path);
      }
    }, '');
  };

  useEffect(() => {
    serviseTrandingMovies().then(r => setterendingMovies(r));
    bgPath();
  }, []);

  console.log('bgImg', bgImg);
  const bgImgPath = `https://image.tmdb.org/t/p/w500/${bgImg}`;
  console.log('bgImgPath', bgImgPath);
  // linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
  // backgroundImage: `${bgImgPath}`
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7))`,
      }}
    >
      {' '}
      <div className={css.bacdrop}>
        <ul className={css.list_movie}>
          {trendingMovies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <Link to={`selected_movie/${id}`} state={{ from: location }}>
                <TradingItem img={poster_path} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
