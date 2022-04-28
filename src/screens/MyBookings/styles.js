import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';
import { METRICS } from 'styles/metrics';
import common from 'styles/common';

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.white,
  },
  content: {
    marginTop: -40,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: METRICS.padding.screen.bottom + 60,
    ...common.topShadow,
  },
  bookNow: {
    marginTop: 10,
    height: 25,
    width: '50%',
    backgroundColor: colors.secondaryColor,
  },
  bookNowText: {
    fontSize: METRICS.text.smallText,
    fontFamily: FONTS.primary.medium,
  },
  listHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterIcon: { height: METRICS.icons.height, width: METRICS.icons.width },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  listContainer: {
    paddingBottom: 30,
  },
  list: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: METRICS.padding.screen.vertical,
    paddingHorizontal: METRICS.padding.screen.horizontal,
  },
  topGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: METRICS.padding.screen.horizontal,
  },
  expandedHeaderWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTodayTitle: {
    marginBottom: 3,
    color: colors.white,
    fontFamily: FONTS.primary.bold,
    fontSize: METRICS.text.largeText,
  },
  headerSubtitle: {
    marginBottom: 10,
    color: colors.white,
    fontFamily: FONTS.primary.medium,
    fontSize: METRICS.text.mediumText,
  },
  scrolledTextHeader: {
    color: colors.white,
    fontFamily: FONTS.primary.bold,
    fontSize: METRICS.text.largeText,
    marginBottom: 10,
  },
  headerTitleScrolled: {
    paddingVertical: 10,
  },
  closedHeaderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
