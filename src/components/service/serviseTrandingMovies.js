import { movieApi } from "./serviseBaseApi";

export default async function serviseTrandingMovies() {
    const resp = await movieApi.request({
        url: `/trending/movie/day`,

      });
      return resp.data.results;
      

}