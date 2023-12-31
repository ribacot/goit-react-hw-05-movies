import { Suspense, useEffect, useState, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
  useOutletContext,
} from 'react-router-dom';
import Container from 'components/Container/Container';
import { fetchById } from 'components/service/serviseById';
import Button from 'components/Button/Button';
import css from './SelectedMovie.module.css';
import cssBtn from '../../components/Button/Button.module.css';

export default function SelectedMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [], poster_path: '' });
  const location = useLocation();
  const [bg, setBg] = useState('');
  const [padding] = useOutletContext();
  const backLincRef = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!id) return;
    fetchById(id)
      .then(r => setMovie(r))
      .catch(e => console.log(e));
  }, [id]);

  useEffect(() => {
   setBg(movie.backdrop_path);
  }, [movie.backdrop_path]);

  const bgPath = `https://image.tmdb.org/t/p/w300/${bg}`;
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
        <section style={{ paddingTop: `${padding + 10}px` }}>
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
                        ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    style={{width:300, height:450}}
                  />
                </div>
                <div className={css.status}>
                  <h3>Status:</h3>
                  <span
                    className={css.span_status}
                    style={{
                      color: `${
                        status?.toLowerCase() === 'released'
                          ? ' rgb(156, 241, 91)'
                          : 'red'
                      }`,
                    }}
                  >
                    {status}
                  </span>
                </div>
                {homepage && (
                  <a
                    href={homepage}
                    target="blank"
                    className={`${css.look_it} ${cssBtn.buttonNav}`}
                  >
                    Look it
                  </a>
                )}

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
              <div className={css.descriptionMovie}>
                {genres.length ? (
                  <div className={css.genres}>
                    <h3 className={css.subTitledescriptionMovie}>Genres: </h3>
                    <ul>
                      {genres.map(({ name, id }) => (
                        <li key={id}>{name}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className={css.overview}>
                  <h3 className={css.subTitledescriptionMovie}>Overview</h3>
                  <p>{overview}</p>
                </div>
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
