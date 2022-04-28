import jwtDecode from 'jwt-decode';
import timeService from './Time';
import Storage from './Storage';
import { ACCESS_TOKEN_KEY } from 'config';

/**
 * @description Perform access token operations
 * Store, get, decode, get expiration date, check if expired, validate, remove
 */
class Token {
  /**
   * @description Stores token. Returns true/false if succeded or not.
   * @param token: String
   * @returns Boolean
   */
  static store(token) {
    if (!this.isValid(token)) {
      return false;
    }
    return Storage.store(ACCESS_TOKEN_KEY, token);
  }

  /**
   * @description Gets stored token
   * @returns String
   */
  static get() {
    return Storage.get(ACCESS_TOKEN_KEY);
  }

  /**
   * @description Decodes a token. A falsy token will return {}.
   * @param token: String
   * @returns Object
   */
  static decode(token) {
    if (!this.isValid(token)) {
      return {};
    }

    try {
      return jwtDecode(token);
    } catch (err) {
      return {};
    }
  }

  /**
   * @description Returns expiration date as Unix Timestamp (ms) or null.
   * @param token: String
   * @returns Number || null
   */
  static getExpiration(token) {
    if (!this.isValid(token)) {
      return null;
    }
    const decodedToken = this.decode(token);
    return decodedToken.exp || null;
  }

  /**
   * @description Returns true/false if token is expired or not (with minute precision)
   * @param token: String
   * @returns Boolean
   */
  static isExpired(token) {
    if (!this.isValid(token)) {
      return true;
    }

    const expirationDate = this.getExpiration(token);

    if (!expirationDate) {
      return true;
    }
    return expirationDate < new Date() / 1000;
  }

  /**
   * @description Checks if token is valid
   * @param token: String
   * @returns Boolean
   */
  static isValid(token) {
    return !!token;
  }

  /**
   * @description Removes token from storage
   * @returns Boolean
   */
  static remove() {
    return Storage.remove(ACCESS_TOKEN_KEY);
  }
}

export default Token;
