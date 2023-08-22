import { Suspense, useEffect, useState, useRef, useMemo } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import Container from 'components/Container/Container';
import { fetchById } from 'components/service/serviseById';
import Button from 'components/Button/Button';
import css from './SelectedMovie.module.css';

export default function SelectedMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [], poster_path: '' });
  const location = useLocation();
  const [bg, setBg] = useState('');

  const bgMemo = useMemo(() => {
    const bgM = movie.backdrop_path ?? '';
    return bgM;
  }, [movie]);

  const backLincRef = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!id) return;
    fetchById(id)
      .then(r => setMovie(r))
      .catch(e => console.log(e));
    setBg(bgMemo);
    console.log('use');
    console.log('id:', id);
    console.log('bgMemo: ', bgMemo);
  }, [id, bgMemo]);

  const bgPath = `https://image.tmdb.org/t/p/w500/${bg}`;
  const { title, poster_path, overview, genres, status, homepage } = movie;

  return (
    <>
      <div
        className="bacdrop"
        style={{
          backgroundImage: `${
            bg
              ? `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),url(${bgPath})`
              : ''
          }`,
        }}
      >
        <section className={css.section_selected}>
          <Container styles={css.container_selected}>
            <Link to={backLincRef.current} className="navLink">
              <Button>Go back</Button>
            </Link>
            <h1>{title}</h1>

            <div className={css.description}>
              <div className={css.thumb_img}>
                <div>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width={300}
                  />
                </div>
                <div className={css.status}>
                  <h3>
                    Status: <span>{status}</span>
                  </h3>

                  {homepage && (
                      <a href={homepage} target="blank">
                        <Button styles={css.look_it}>Look it</Button>
                      </a>
                    )}
                </div>
                <div className={css.nav}>
                  <NavLink
                    to="cast"
                    state={{ from: location }}
                    className="navLink"
                  >
                    <Button>Cast</Button>
                  </NavLink>
                  <NavLink
                    to="reviews"
                    state={{ from: location }}
                    className="navLink"
                  >
                    <Button>Reviews</Button>
                  </NavLink>
                </div>
              </div>
              <div>
                {genres.length ? (
                  <>
                    <h3>Genres: </h3>
                    <ul>
                      {genres.map(({ name, id }) => (
                        <li key={id}>{name}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                <h3>Overview</h3>
                <p className={css.overview}>{overview}</p>
                <div>
                  <Suspense fallback={<h2>Loading...</h2>}>
                    {<Outlet />}
                  </Suspense>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
