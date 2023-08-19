import { movieApi } from './serviseBaseApi';

export default async function fetchSearchMovie(searchQwery="") {
  const resp = await movieApi.request({
    url: `/search/movie?query=${searchQwery}&include_adult=false&language=en-US&page=1`
  });
  return resp.data;
}
// 'https://api.themoviedb.org/3/search/movie?query=barby&include_adult=false&language=en-US&page=1' \