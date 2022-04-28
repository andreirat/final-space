import request from 'superagent';
import { API_TIMEOUT } from '../config';

const getError = (err, res) => {
  if (res && res.body && res.body.message) {
    return res.body;
  }
  if (err == null) {
    return 'Something went wrong';
  }
  return `${err}`;
};

/**
 * @description Append token & other header fields to the default request header
 * @param token: String
 * @param others: Object
 * @returns Object
 * @private
 */
function getRequestHeader(token = null, others = {}) {
  let header = {
    'Content-Type': 'application/json',
    ...others,
  };

  if (token) {
    header = Object.assign({}, header, { Authorization: `Bearer ${token}` });
  }
  return header;
}

/**
 * @description Handle API response
 * @param err: Object
 * @param res: Object
 * @param resolve: Function
 * @param reject: Function
 * @private
 */
function handleResponse(err, res, resolve, reject) {
  if (err) {
    return reject(getError(err, res));
  }
  if (!res.ok || (res.body && res.body.success === false)) {
    return reject(getError(err, res));
  }
  return resolve(res.body);
}

/**
 * @description GET request
 * @param path: String
 * @param query: Object
 * @param token: String
 * @returns Promise
 */
export function get(path, query = {}, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .get(path)
      .query(query)
      .set(header)
      .timeout({ response: API_TIMEOUT })
      .end((err, res) => handleResponse(err, res, resolve, reject));
  });
}

/**
 * @description POST request
 * @param path: String
 * @param payload: Object
 * @param headers: Object
 * @param token: String
 * @returns Promise
 */
export function post(path, payload, token = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token, headers);
    request
      .post(path)
      .set(header)
      .send(payload)
      .timeout({ response: API_TIMEOUT })
      .end((err, res) => handleResponse(err, res, resolve, reject));
  });
}

/**
 * @description PUT request
 * @param path: String
 * @param payload: Object
 * @param token: String
 * @returns Promise
 */
export function put(path, payload, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .put(path)
      .send(payload)
      .set(header)
      .timeout({ response: API_TIMEOUT })
      .end((err, res) => handleResponse(err, res, resolve, reject));
  });
}

/**
 * @description DELETE request
 * @param path: String
 * @param query: Object
 * @param token: String
 * @returns Promise
 */
export function del(path, query = {}, token = null) {
  return new Promise((resolve, reject) => {
    const header = getRequestHeader(token);
    request
      .delete(path)
      .query(query)
      .set(header)
      .timeout({ response: API_TIMEOUT })
      .end((err, res) => handleResponse(err, res, resolve, reject));
  });
}
