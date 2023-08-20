import fetchCast from 'components/service/serviseCast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'


  useEffect(() => {
    if (!id) return;
    fetchCast(id).then(r => setCast(r.cast));
    // console.log('id: ',id)
  }, [id]);
  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.map(({ character, name, profile_path, id }) => {
          return (
            <li key={id}>
              <img
                src={profile_path?`https://image.tmdb.org/t/p/w200/${profile_path}`:defaultImg}
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
