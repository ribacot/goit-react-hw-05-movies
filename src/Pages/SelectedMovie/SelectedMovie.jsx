import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import Container from 'components/Container/Container';
import { fetchById } from 'components/service/serviseById';
import css from './SelectedMovie.module.css';

export default function SelectedMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [], poster_path: '' });
  const location = useLocation();
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  useEffect(() => {
    if (!id) return;
    console.log('id: ', id);
    fetchById(id).then(r => setMovie(r));
  }, [id]);
  console.log('movie',movie)
  const { title, poster_path, overview, genres, status,homepage } = movie;

  return (
    <>
      <div
        className={css.bacdrop}
        style={{
          backgroundImage: `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7))`,
        }}
      >
        <section className={css.section_selected}>
          <Container styles={css.container_selected}>
            <Link to={location.state?.from ?? '/'}>Go back</Link>
            <h1>SelectedMovie</h1>
            <h2>{title}</h2>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              alt={title}
              width={250}
            /><a href={homepage} target="_blank">Look it</a>
            <h3>
              Status: <span>{status}</span>
            </h3>
            {genres.length ? (
              <ul>
                {genres.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            ) : null}
            <h3>Overview</h3>

            <p>{overview}</p>
          </Container>
        </section>
        <section>
          <Container>
            <NavLink to="cast">Cast </NavLink>
            <NavLink to="reviews">Reviews</NavLink>
            <Suspense fallback={<div>Loading...</div>}> {<Outlet />}</Suspense>
          </Container>
        </section>
      </div>
    </>
  );
}
