import { StyleSheet } from 'react-native';
import { FONTS } from 'styles/fonts';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';

export default StyleSheet.create({
  base: {
    marginBottom: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightArrowIcon: {
    height: METRICS.menu.icon.right.height,
    width: METRICS.menu.icon.right.width,
  },
  leftIcon: {
    height: METRICS.menu.icon.left.height,
    width: METRICS.menu.icon.left.width,
  },
  title: {
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.mediumText,
    color: colors.gray,
  },
  rightArrow: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  leftArrow: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
