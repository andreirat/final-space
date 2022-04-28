import * as c from './constants';
import { DEFAULT_ROUTE } from 'config';

const initialState = {
  currentScreen: null,
  prevScreen: null,
  currentTab: DEFAULT_ROUTE, // by default, go to this route
  currentTabIndex: 0,
  prevTab: null,

  setup: {
    pending: false,
    success: false,
    error: false,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.INITIAL_SETUP_PENDING: {
      return {
        ...state,
        setup: { ...initialState.setup, pending: true },
      };
    }

    case c.INITIAL_SETUP_ERROR: {
      return {
        ...state,
        setup: { ...initialState.setup, error: action.payload },
      };
    }

    case c.INITIAL_SETUP_SUCCESS: {
      return {
        ...state,
        setup: { ...initialState.setup, success: true },
      };
    }

    default: {
      return state;
    }
  }
};
