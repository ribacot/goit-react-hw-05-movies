import { movieApi } from './service/serviseBaseApi';

export const fetchDetails = async id => {
  const resp = await movieApi.request({
    url: `/movie/${id}`,
  });
  return resp;
};
