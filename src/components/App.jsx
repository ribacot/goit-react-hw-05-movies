import {Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Movies from 'Pages/Movies/Movies'
import SelectedMovie from 'Pages/SelectedMovie/SelectedMovie';
import { lazy } from 'react';
import TrandingMovies from './TrandingMovies/TrandingMovies';
const Cast = lazy(()=>import('./Cast/Cast')) ;
const  Reviews =lazy(()=>import('./Reviews/Reviews')) 

export const App = () => {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index  element={<TrandingMovies/>} />
        <Route path='movie' element={<Movies/>}/>
        <Route path="selected_movie/:id" element={<SelectedMovie/>}>
        <Route path='cast' element={<Cast/>}/>
        <Route path='reviews' element={<Reviews/>}/>

        </Route>
        <Route path="*" element={<div>STOP</div>} />

      
      </Route>
    </Routes>

  )
};

// import { useEffect,useState } from 'react';
// import { movieApi } from './service/serviseBaseApi';
// import { fetchDetails } from './service/serviseDetails';

//   const [moviesTranding, setMoviesTranding] = useState([]);

//   useEffect(() => {
//     const fetchTranding = async () => {
//       const resp = await movieApi.request({
//         url: 'trending/movie/day',
//       });
//       setMoviesTranding(resp.data);
//     };
//     fetchTranding();

//     movieApi.request({
//       url:'movie/724209/images'
//      }).then(r=>console.log('data',r.data));

//     // fetchDetails(724209)
//   }, []);
//   console.log('moviesTranding', moviesTranding);

//   return <div></div>;
// };
