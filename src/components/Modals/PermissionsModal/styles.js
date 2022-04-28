import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';
import { METRICS } from 'styles/metrics';
export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: METRICS.radius.card,
  },
  title: {
    textAlign: 'center',
    color: colors.dark,
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.regularText,
    marginBottom: 10,
  },
  icon: { height: 40, width: 40, marginBottom: 20 },
  name: {
    fontFamily: FONTS.primary.semibold,
  },
  button: { height: 40, paddingHorizontal: 20, marginTop: 20 },
  description: {
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.mediumText,
    lineHeight: METRICS.text.smallText * 1.5,
  },
});
