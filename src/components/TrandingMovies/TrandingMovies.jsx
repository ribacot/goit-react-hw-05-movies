import serviseTrandingMovies from 'components/service/serviseTrandingMovies';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TrandingMovies() {
  const [trendingMovies, setterendingMovies] = useState([]);

  useEffect(() => {
    serviseTrandingMovies().then(r => setterendingMovies(r));
  }, []);
  // console.log("terendingMovies",trendingMovies)

  return (
    <ul>
      {trendingMovies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`selected_movie/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
