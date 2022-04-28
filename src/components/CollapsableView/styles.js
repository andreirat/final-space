import { StyleSheet } from 'react-native';
import { CONTENT_WIDTH, METRICS } from 'styles/metrics';
import colors from 'styles/colors';
import common from 'styles/common';
import { FONTS } from 'styles/fonts';

export default StyleSheet.create({
  content: {
    marginTop: 10,
  },
  container: {
    paddingTop: 30,
  },
  sectionContainer: {
    width: CONTENT_WIDTH,
    padding: METRICS.padding.card,
    borderRadius: METRICS.radius.card,
    backgroundColor: colors.white,
    marginBottom: 15,
    ...common.shadow,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: METRICS.menu.icon.right.width,
    height: METRICS.menu.icon.right.height,
  },
  headerText: {
    width: '90%',
    color: colors.dark,
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.mediumText,
  },
  contentText: {
    color: colors.dark,
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.smallText,
  },
});
