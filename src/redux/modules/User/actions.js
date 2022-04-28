import * as ac from './actionCreators';
import * as userAPI from 'api/user';
import { handleReduxError } from 'utils/errorHandler';
import { isIOS } from 'styles/metrics';

export function setDeviceToken(device_token) {
  return async dispatch => {
    dispatch(ac.setDeviceToken.pending());
    const os = isIOS ? 'ios' : 'android';
    try {
      //TODO:  Api request with device token. ex: {device_token, os}
      dispatch(ac.setDeviceToken.success());
    } catch (err) {
      dispatch(handleReduxError(ac.setDeviceToken.error, err));
    }
  };
}

export const setCurrentUser = data => dispatch => {
  dispatch(ac.set.current(data));
};

export const editUser = payload => dispatch => {
  dispatch(ac.editUser.default(payload));
};

export function updateProfile(data) {
  return async dispatch => {
    dispatch(ac.updateProfile.pending());
    try {
      await userAPI.update(data);
      dispatch(ac.updateProfile.success());
    } catch (err) {
      dispatch(handleReduxError(ac.updateProfile.error, err));
    }
  };
}

export function getProfile() {
  return async dispatch => {
    dispatch(ac.getProfile.pending());
    try {
      const userProfile = await userAPI.getProfile();
      dispatch(ac.getProfile.success(userProfile));
    } catch (err) {
      dispatch(handleReduxError(ac.getProfile.error, err));
    }
  };
}
