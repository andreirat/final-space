import _set from 'lodash';

import * as c from './constants';
import { getApiInitialState } from 'utils/redux';

const apiInitialState = getApiInitialState();

const defaultUserData = {
  email: '',
  first_name: '',
  last_name: '',
};

const initialState = {
  current: defaultUserData,
  api: apiInitialState,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.SET_CURRENT: {
      return {
        ...state,
        current: action.payload,
      };
    }

    case c.EDIT_USER: {
      const current = { ...state.current };
      _set(current, action.payload.path, action.payload.value);
      return {
        ...state,
        current,
      };
    }

    case c.SET_DEVICE_TOKEN_PENDING: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          pending: true,
        },
      };
    }

    case c.SET_DEVICE_TOKEN_ERROR: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          error: action.payload,
        },
      };
    }

    case c.SET_DEVICE_TOKEN_SUCCESS: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          success: true,
        },
      };
    }

    case c.UPDATE_PROFILE_PENDING: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          pending: true,
        },
      };
    }

    case c.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          success: true,
        },
      };
    }

    case c.UPDATE_PROFILE_ERROR: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          error: action.payload,
        },
      };
    }

    case c.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          success: true,
        },
        current: action.payload,
      };
    }

    case c.GET_PROFILE_PENDING: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          pending: true,
        },
      };
    }

    case c.GET_PROFILE_ERROR: {
      return {
        ...state,
        api: {
          ...apiInitialState,
          error: action.payload,
        },
      };
    }

    case c.RESET: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
