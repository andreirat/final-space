import * as c from './constants';
import { actionCreator, asyncActionCreator } from 'utils/redux';

const initialSetup = asyncActionCreator(
  c.INITIAL_SETUP_PENDING,
  c.INITIAL_SETUP_SUCCESS,
  c.INITIAL_SETUP_ERROR,
);

const setHasInternet = actionCreator(c.SET_HAS_INTERNET);

export { initialSetup, setHasInternet };
