import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS, CONTENT_WIDTH } from 'styles/metrics';
import { FONTS } from 'styles/fonts';
import common from 'styles/common';

export default StyleSheet.create({
  base: {
    justifyContent: 'space-between',
    marginTop: 30,
    width: CONTENT_WIDTH,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderRadius: METRICS.radius.myBookingCard,
    ...common.shadow,
  },
  titleWrapper: {
    marginLeft: 5,
  },
  leftSection: {
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  contact: {
    marginLeft: 5,
  },
  title: {
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.smallText,
    marginBottom: 3,
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
  subtitle: {
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.smallText,
  },
  buttonsWrapper: {
    paddingHorizontal: 16,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
});
