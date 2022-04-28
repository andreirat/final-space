/**
 * @description Get the error message out of the error Object
 * @param err: Object
 * @returns String
 */
const getErrorMessage = err => {
  if (err.message) {
    return err.message;
  }
  return `${err}`;
};

/**
 * @description Handle an error from Redux, by returning an action creator
 * @param actionCreator: Object
 * @param err: Object
 * @param fullBody: Boolean
 * @returns Object
 */
const handleReduxError = (actionCreator, err, fullBody = false) => {
  if (fullBody) {
    return actionCreator(err);
  }
  return actionCreator(getErrorMessage(err));
}

export {getErrorMessage, handleReduxError};
