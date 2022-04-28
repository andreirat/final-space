import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';
import { FONTS } from 'styles/fonts';
import { CONTENT_WIDTH } from 'styles/metrics';
import common from 'styles/common';

export default StyleSheet.create({
  base: {
    width: CONTENT_WIDTH,
    marginBottom: METRICS.margin.section.bottom,
    padding: METRICS.padding.card,
    borderRadius: METRICS.radius.card,
    backgroundColor: colors.white,
    ...common.shadow,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: METRICS.margin.section.top,
  },
  title: {
    color: colors.dark,
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.regularText,
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
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
