export default function FormSearch({ value='', onChenge,onSubmit }) {
  return (
    <><form action="submit" onSubmit={onSubmit} >
              <label htmlFor="searchFilm"></label>
      <input type="text" id="searchFilm" value={value} onChange={onChenge} />

    </form>
    </>
  );
}
