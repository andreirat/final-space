/**
 * @description Generate sync action creator
 * @param type: String
 * @returns Object
 */
const actionCreator = type => {
  return (payload, path) => {
    let obj = {
      type,
    };
    if (payload != null) {
      obj = Object.assign({}, obj, { payload });
    }
    if (path != null) {
      obj = Object.assign({}, obj, { path });
    }
    return obj;
  };
};

/**
 * @description Generate async action creator
 * @param pending: String
 * @param success: String
 * @param error: String
 * @returns Object
 */
const asyncActionCreator = (pending, success, error) => {
  return {
    pending: actionCreator(pending),
    success: actionCreator(success),
    error: actionCreator(error),
  };
};

/**
 * @description Get initial state for API requests
 * @returns Object
 */
const getApiInitialState = () => {
  return {
    pending: false,
    error: false,
    success: false,
  };
};

export { actionCreator, asyncActionCreator, getApiInitialState };
