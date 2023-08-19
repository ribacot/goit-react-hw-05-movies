import { movieApi } from './serviseBaseApi';

export default async function fetchCast(id) {
  const resp = await movieApi.request({
    url: `/movie/${id}/credits`
  });
  return resp.data;
}
