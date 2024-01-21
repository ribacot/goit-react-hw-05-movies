import css from './MovieItem.module.css';
export default function TradingItem({ movie }) {
  const { poster_path, title, vote_average, release_date } = movie;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  console.log('vote_average', vote_average.toFixed(1));
  return (
    <>
      <div className={css.decor_img}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : defaultImg
          }
          alt="poster"
          style={{ width: 230, height: 345 }}
          className={css.linkMovie}
        />
        <div className={css.posterTitle}>
          <p>{title}</p>
        </div>
        <div className={css.posterRating}>
          <p>Rating: {vote_average.toFixed(1)}</p>
          <p>Release: {release_date}</p>
        </div>
      </div>
    </>
  );
}
