import { fetchById } from 'components/service/serviseById';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function SelectedMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [], poster_path: '' });
  const location = useLocation();

  useEffect(() => {
    fetchById(id).then(r => setMovie(r));
  }, [id]);
  console.log('movie', movie);
  const { title, poster_path, overview, genres, status } = movie;
  console.log('location: ', location);
  return (
    <>
      <Link to={location.state.from.pathname}>Go back</Link>
      {console.log('selected')}
      <h1>SelectedMovie</h1>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2>
        Status: <span>{status}</span>
      </h2>
      {genres.length ? (
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      ) : null}
      <h3>Overview</h3>

      <p>{overview}</p>

      <NavLink to="cast">Cast </NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Suspense fallback={<div>Loading...</div>}> {<Outlet />}</Suspense>
    </>
  );
}
// 976573;
// "imdb_id": "tt15789038"
