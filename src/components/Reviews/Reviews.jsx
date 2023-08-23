import { useParams,  NavLink } from 'react-router-dom';
import { useEffect, useState,  } from 'react';
import fetchReviews from 'components/service/serviseRewiews';
import css from './Reviews.module.css';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  // const location = useLocation();
  // const backLincRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!id) return;
    fetchReviews(id).then(r => setReviews(r.results));
  }, [id]);

  return (
    <section className={css.reviews}>
      <h2 className={css.title}>Reviews</h2>
      <NavLink to={`/selectedmovie/${id}`} className="navLink">
        Close
      </NavLink>

      {reviews.length ? (
        <ul className={css.list}>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id} className={css.item}>
                <h3 className={css.title_author}>{author}</h3>
                <p className={css.review}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Reviews not found</h3>
      )}
    </section>
  );
}
