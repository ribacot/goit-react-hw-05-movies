import fetchCast from 'components/service/serviseCast';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!id) return;
    fetchCast(id).then(r => setCast(r.cast));
  }, [id]);
  return (
    <section className={css.section_cast}>
      {/* <div> */}
        <h2 className={css.title}>Cast</h2>
        <Link to={`/selectedmovie/${id}`} className="close">
         X
        </Link>
      {/* </div> */}
      <ul className={css.list}>
        {cast.map(({ character, name, profile_path, id }) => {
          return (
            <li key={id}>
              <div className={css.profile}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : defaultImg
                  }
                  alt={character}
                  width={150}
                />
                <div>
                  <h3>{name}</h3>
                  <h4>Character: "{character}"</h4>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
