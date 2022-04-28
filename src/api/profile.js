import { post } from 'utils/superagent';
import { Routes } from 'api/routes';

/**
 * @description Send contact us form
 * @returns {Promise<unknown>}
 */
export async function contactUs(payload) {
  return post(Routes.app.contactUs, payload);
}
