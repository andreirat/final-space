import { StyleSheet } from 'react-native';
import { METRICS, SCREEN_HEIGHT } from '../../styles/metrics';

export default StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.12,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: METRICS.padding.screen.horizontal,
    paddingBottom: 15,
  },
});
