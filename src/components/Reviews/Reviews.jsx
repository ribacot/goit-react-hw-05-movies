import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchReviews from 'components/service/serviseRewiews';
import css from './Reviews.module.css';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) return;
    fetchReviews(id).then(r => setReviews(r.results)).catch(e=>console.log(e));
  }, [id]);

  return (
    <section className={css.reviews}>
      <h2 className={css.title}>Reviews</h2>
      <Link to={`/selectedmovie/${id}`} className="close">
        X
      </Link>

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
