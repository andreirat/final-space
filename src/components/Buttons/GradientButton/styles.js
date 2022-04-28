import { StyleSheet } from 'react-native';
import { METRICS } from 'styles/metrics';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';

export default StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
  img: {
    height: 13,
    width: 13,
  },
  text: {
    marginLeft: 3,
    color: colors.white,
    fontFamily: FONTS.primary.bold,
    fontSize: METRICS.text.caption,
  },
  linearGradient: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: METRICS.radius.myBookingCard,
  },
});
