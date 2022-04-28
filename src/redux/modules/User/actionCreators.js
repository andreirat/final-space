import * as c from './constants';
import { actionCreator, asyncActionCreator } from 'utils/redux';

export const setDeviceToken = asyncActionCreator(
  c.SET_DEVICE_TOKEN_PENDING,
  c.SET_DEVICE_TOKEN_SUCCESS,
  c.SET_DEVICE_TOKEN_ERROR,
);

export const updateProfile = asyncActionCreator(
  c.UPDATE_PROFILE_PENDING,
  c.UPDATE_PROFILE_SUCCESS,
  c.UPDATE_PROFILE_ERROR,
);

export const getProfile = asyncActionCreator(
  c.GET_PROFILE_PENDING,
  c.GET_PROFILE_SUCCESS,
  c.GET_PROFILE_ERROR,
);

export const set = {
  current: actionCreator(c.SET_CURRENT),
};

export const editUser = {
  default: actionCreator(c.EDIT_USER),
};
