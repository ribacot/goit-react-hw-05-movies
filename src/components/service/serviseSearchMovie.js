import { movieApi } from './serviseBaseApi';

export default async function fetchSearchMovie(searchQwery) {
  try {
    const resp = await movieApi.request({
      url: `/search/movie?query=${searchQwery}`,
      params: {
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
