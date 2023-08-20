import css from './FormSearch.module.css'
export default function FormSearch({ value='', onChenge,onSubmit }) {
  return (
    <><form action="submit" onSubmit={onSubmit} className={css.form}>
              <label htmlFor="searchFilm"></label>
      <input type="text" id="searchFilm" value={value} onChange={onChenge} className={css.input}/>

    </form>
    </>
  );
}
