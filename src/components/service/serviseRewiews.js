import { movieApi } from './serviseBaseApi';

export default async function fetchReviews(id) {
  const resp = await movieApi.request({
    url: `/movie/${id}/reviews`,
    params: { page: 1 },
  });
  return resp.data;
}
