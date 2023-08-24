import { Link } from "react-router-dom";
import TradingItem from "Pages/TrandingMovies/TradingItem/TradingItem";


export default function ListMovies({movies}) {
  return (
    <ul className="list_movie">
      {movies.map(({ id, poster_path }) => (
        <li key={id} className='link'>
          <Link to={`selectedmovie/${id}`} state={{ from: location }}>
            <TradingItem img={poster_path} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
