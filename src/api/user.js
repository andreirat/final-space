import { put, get } from 'utils/superagent';
import { Token } from 'services';
import { Routes } from 'api/routes';

/**
 * @description Get user profile
 * @returns {Promise<unknown>}
 */
export async function getProfile() {
  const token = await Token.get();
  return get(Routes.user.get, {}, token);
}

/**
 * @description Update user profile
 * @param payload
 * @returns {Promise<unknown>}
 */
export const update = async payload => {
  const token = await Token.get();
  return put(Routes.user.update, payload, token);
};
