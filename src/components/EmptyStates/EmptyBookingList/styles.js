import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';
import { METRICS } from 'styles/metrics';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  subtitle: {
    fontSize: METRICS.text.mediumText,
    fontFamily: FONTS.primary.light,
    color: colors.gray,
    marginBottom: 10,
  },
});
