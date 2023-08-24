import css from './MovieItem.module.css';
export default function TradingItem({ img }) {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <div className={css.decor_img}>
        <img
          src={img ? `https://image.tmdb.org/t/p/w342/${img}` : defaultImg}
          alt="poster"
          width={300}
        />
      </div>
    </>
  );
}
