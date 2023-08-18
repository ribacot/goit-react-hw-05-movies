import {Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies'
// import Button from './Button/Button';

export const App = () => {
  console.log('app');

  return (
    // <>
    //   <Layout />
    //   <Home />
    // </>

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index  element={<Home />} />
        <Route path='movie' element={<Movies/>}/>
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
