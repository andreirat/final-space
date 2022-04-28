import { API_HOST } from '../../config';

export const Routes = {
  episodes: {
    fetch: `${API_HOST}/episode`,
  },
  characters: {
    fetch: `${API_HOST}/character`,
  },
};
