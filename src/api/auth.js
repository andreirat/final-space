import { get, post } from 'utils/superagent';
import { Token } from 'services';
import { Routes } from 'api/routes';

/**
 * @description Simple authentication via email and pass.
 * @param credentials: Object { email: String, password: String }
 * @returns Promise
 */
export const login = async credentials => {
  return post(Routes.auth.login, credentials);
};

/**
 * @description Check if the stored access token is valid.
 * @returns Promise
 */
export const verifyToken = async () => {
  const token = await Token.get();
  try {
    const payload = await get(Routes.auth.verifyToken, {}, token);
    return payload.data;
  } catch (err) {
    return null;
  }
};

/**
 * @description Check if an email is already registered
 * @param email: String
 * @returns Promise
 */
export const checkEmail = async email => {
  return post(Routes.auth.verifyEmail, { email });
};

/**
 * @description Register a user
 * @param data
 * @returns {Promise<unknown>}
 */
export const register = async data => {
  return post(Routes.auth.register, data);
};

/**
 * @description Logout by removing the stored access token.
 * @returns Promise
 */
export const logout = () => Token.remove();
