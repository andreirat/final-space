import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';
import { FONTS } from 'styles/fonts';

export default StyleSheet.create({
  base: {
    height: METRICS.height.myBookingCard,
    flexDirection: 'row',
    padding: METRICS.padding.card,
    marginTop: 15,
    borderRadius: METRICS.radius.myBookingCard,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowColor: colors.shadow,
    shadowRadius: 20,
    elevation: 2,
  },
  avatar: { width: 50, borderRadius: 25, height: 50 },
  priceText: {
    color: colors.gray,
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.smallText,
    lineHeight: METRICS.text.caption * 1.5,
  },
  leftIconWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSection: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ownerName: {
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.mediumText,
    lineHeight: METRICS.text.smallText * 1.5,
  },
  rightArrow: {
    padding: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  leftArrow: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  date: {
    color: colors.gray,
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.smallText,
    lineHeight: METRICS.text.caption * 1.5,
  },
  textWrapper: {
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
