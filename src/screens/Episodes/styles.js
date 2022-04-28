import { StyleSheet } from 'react-native';
import { METRICS } from '../../styles/metrics';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingTop: METRICS.padding.screen.horizontal,
  },
});

export default styles;
