import { StyleSheet } from 'react-native';
import { METRICS } from 'styles/metrics';

export default StyleSheet.create({
  list: {
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: METRICS.padding.screen.vertical,
    paddingHorizontal: METRICS.padding.screen.horizontal,
  },
  container: { paddingBottom: 180, justifyContent: 'center' },
});
