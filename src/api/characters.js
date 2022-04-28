import { get } from '../utils/superagent';
import { Routes } from './routes';

/**
 * @description Fetch Final Space Characters
 * @returns {Promise<unknown>}
 */
export async function fetchCharacters() {
  return get(Routes.characters.fetch, {});
}
