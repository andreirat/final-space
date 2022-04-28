import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS, CONTENT_WIDTH } from 'styles/metrics';
import { FONTS } from 'styles/fonts';

export default StyleSheet.create({
  base: {
    marginTop: 30,
    width: CONTENT_WIDTH,
    flexDirection: 'row',
    padding: METRICS.padding.card,
    borderRadius: METRICS.radius.card,
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
  leftSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.mediumText,
    lineHeight: METRICS.text.mediumText * 1.5,
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
    lineHeight: METRICS.text.smallText * 1.5,
  },
  textWrapper: {
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
