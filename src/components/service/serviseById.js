import axios from 'axios';

// import { movieApi } from './service/serviseBaseApi';

// export const fetchById = async () => {
//   const resp = await movieApi.request({
//     url: `movie/976573`,

//   });
//   return resp
//   ;
// };
export const fetchById = async id => {

  const resp = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ac6450da179fe421cf9742ae69a33de4`
  );

  return resp.data;
};
// movie/{movie_id}/external_ids
// https://api.themoviedb.org/3/movie/976573/external_ids \
