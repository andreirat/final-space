import { get } from '../utils/superagent';
import { Routes } from './routes';

/**
 * @description Fetch Final Space Episodes
 * @returns {Promise<unknown>}
 */
export async function fetchEpisodes() {
  return get(Routes.episodes.fetch, {});
}
