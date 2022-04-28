import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';
import { METRICS } from 'styles/metrics';

export default StyleSheet.create({
  base: {
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.lighterGray,
    borderBottomWidth: 1,
  },
  text: {
    color: colors.gray2,
    fontFamily: FONTS.primary.medium,
    fontSize: METRICS.text.smallText,
  },
});
