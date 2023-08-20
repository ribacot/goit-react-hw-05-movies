import { movieApi } from './serviseBaseApi';

export default async function fetchReviews(id) {
  try {
    const resp = await movieApi.request({
      url: `/movie/${id}/reviews`,
      params: { page: 1 },
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
