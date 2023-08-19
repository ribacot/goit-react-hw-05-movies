import fetchCast from 'components/service/serviseCast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCast(id).then(r => setCast(r.cast));
  }, [id]);
  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.map(({character, name, profile_path, id}) => {
          return (
            <li key={id}>
              <img 
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={character}
              />
              <div>
                <h2>{name}</h2>
                <h3>Character: "{character}"</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
