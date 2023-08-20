import { movieApi } from './serviseBaseApi';

export default async function serviseTrandingMovies() {
  try {
    const resp = await movieApi.request({
      url: `/trending/movie/day`,
    });
    return resp.data.results;
  } catch (error) {
    console.log(error);
  }
}
