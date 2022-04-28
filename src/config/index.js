import Config from 'react-native-config';

const configObj = {
  api: {
    host: Config.API_HOST,
    defaultTimeout: 20000,
  },
};

const API_HOST = configObj.api.host;
const API_TIMEOUT = configObj.api.timeout;

export { API_HOST, API_TIMEOUT };
