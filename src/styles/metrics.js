import { Dimensions, Platform } from 'react-native';
import { deviceHasNotch } from '../utils';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const isIOS = Platform.OS === 'ios';

const METRICS = {
  text: {
    title: 20,
    cardTitle: 17,
    subtitle: 14,
  },
  radius: {
    cards: {
      episodes: 12,
      character: 8,
    },
  },
  height: {},
  padding: {
    screen: {
      horizontal: 30,
      vertical: 10,
      top: deviceHasNotch() ? 44 : 20,
    },
    tabBar: {
      bottom: deviceHasNotch() ? 0 : 24,
    },
  },
  tabIcon: {
    height: 24,
    width: 24,
  },
  margin: {
    screen: {
      top: deviceHasNotch() ? 44 : 20,
      horizontal: 30,
    },
  },
};

const CONTENT_WIDTH = SCREEN_WIDTH - METRICS.padding.screen.horizontal * 2;

export { METRICS, SCREEN_WIDTH, SCREEN_HEIGHT, isIOS, CONTENT_WIDTH };
