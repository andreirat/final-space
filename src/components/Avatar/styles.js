import { StyleSheet } from 'react-native';

export const DEFAULT_SIZE = 91;
import common from 'styles/common';

export default StyleSheet.create({
  base: {
    height: DEFAULT_SIZE,
    width: DEFAULT_SIZE,
    borderRadius: DEFAULT_SIZE / 2,
    overflow: 'hidden',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropShadow: {
    ...common.shadow,
    shadowOpacity: 0.9,
  },
  img: {
    flex: 1,
  },
});
