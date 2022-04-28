import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';
import { FONTS } from 'styles/fonts';
import common from 'styles/common';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: METRICS.height.button.secondary,
    backgroundColor: colors.lightGray,
    borderRadius: METRICS.radius.dynamicTabBar,
    flexDirection: 'row',
  },
  tab: {
    justifyContent: 'center',
    borderRadius: METRICS.radius.dynamicTabBar,
  },
  linearGradient: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: METRICS.radius.dynamicTabBar,
  },
  tabName: {
    fontFamily: FONTS.primary.medium,
    fontSize: METRICS.text.smallText,
    lineHeight: METRICS.text.mediumText,
  },
  activeTabName: {
    color: colors.white,
  },
  inactiveTabName: {
    color: colors.gray2,
  },
  inactiveView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
