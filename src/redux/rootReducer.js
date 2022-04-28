import { combineReducers } from 'redux';

import app from './modules/App/reducer';
import user from './modules/User/reducer';

export default combineReducers({ app, user });
