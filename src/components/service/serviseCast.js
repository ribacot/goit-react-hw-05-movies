import { movieApi } from './serviseBaseApi';

export default async function fetchCast(id) {
  try {
    const resp = await movieApi.request({
      url: `/movie/${id}/credits`,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
