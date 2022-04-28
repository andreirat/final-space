import { StyleSheet } from 'react-native';
import { METRICS } from '../../../styles/metrics';
import { deviceHasNotch } from '../../../utils';

export default StyleSheet.create({
  base: {
    alignItems: 'center',
    marginLeft: 0,
    borderRadius: 15,
    position: 'absolute',
    zIndex: 122,
    top: deviceHasNotch() ? 65 : 45,
    left: METRICS.padding.screen.horizontal,
  },
  img: {
    flex: 1,
  },
});
