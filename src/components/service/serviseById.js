import { movieApi } from './serviseBaseApi';

export const fetchById = async id => {
  try {
    const resp = await movieApi.request({
      url: `/movie/${id}`,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
