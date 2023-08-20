import serviseTrandingMovies from 'components/service/serviseTrandingMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TrandingMovies() {
  const [trendingMovies, setterendingMovies] = useState([]);
  const location=useLocation()

  useEffect(() => {
    serviseTrandingMovies().then(r => setterendingMovies(r));
  }, []);
  // console.log("terendingMovies",trendingMovies)

  return (
    <ul>
      {trendingMovies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`selected_movie/${id}`}state={{from:location}}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
