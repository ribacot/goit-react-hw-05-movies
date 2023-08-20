import css from './TradingItem.module.css'
export default function TradingItem({ img }) {
  return (
    <>
      <div className={css.decor_img}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt="poster"
          width={300}
        />
      </div>
    </>
  );
}
