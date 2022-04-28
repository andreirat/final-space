import produce from 'immer';

// Log every time state is changed
const log = config => (set, get, api) =>
  config(
    args => {
      set(args);
    },
    get,
    api,
  );

// Turn the set method into an immer proxy
const immer = config => (set, get, api) =>
  config(
    (partial, replace) => {
      const nextState =
        typeof partial === 'function' ? produce(partial) : partial;
      return set(nextState, replace);
    },
    get,
    api,
  );

export { log, immer };
