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
  const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

  useEffect(() => {
    if(!id)return 
    console.log('id: ',id)
    fetchById(id).then(r => setMovie(r));
  }, [id]);
  const { title, poster_path, overview, genres, status } = movie;
  return (
    <>
      <Link to={location.state?.from??"/"}>Go back</Link>
      <h1>SelectedMovie</h1>
      <h2>{title}</h2>
      <img src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:defaultImg} alt={title} width={250} />
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

