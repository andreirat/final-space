import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: METRICS.padding.screen.top,
    backgroundColor: colors.white,
    paddingHorizontal: METRICS.padding.screen.horizontal,
  },
  inputBaseStyle: {
    marginBottom: METRICS.margin.input.bottom,
  },
});
