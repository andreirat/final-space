import { get } from 'utils/superagent';
import { Token } from 'services';
import { Routes } from 'api/routes';

/**
 * @description Get user bookings
 * @returns {Promise<unknown>}
 */
export async function getMyBookings() {
  const token = await Token.get();
  return get(Routes.bookings.getMyBookings, {}, token);
}
