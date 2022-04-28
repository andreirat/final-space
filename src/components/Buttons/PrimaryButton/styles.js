import { StyleSheet } from 'react-native';
import { METRICS } from 'styles/metrics';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';

export default StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    height: METRICS.height.button.primary,
    backgroundColor: 'rgba(71, 193, 191, 1)',
    borderRadius: 90,
  },
  img: {},
  text: {
    color: colors.white,
    fontFamily: FONTS.primary.bold,
    fontSize: METRICS.text.mediumText,
    lineHeight: METRICS.text.mediumText * 1.5,
  },
});
