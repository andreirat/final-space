import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';
import { FONTS } from 'styles/fonts';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
  },
  avatar: {
    borderWidth: 2,
    borderColor: colors.white,
  },
  scrollView: {
    marginTop: METRICS.margin.screen.top,
    paddingVertical: METRICS.padding.screen.vertical,
    paddingHorizontal: METRICS.padding.screen.horizontal,
  },
  topWrapper: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: METRICS.text.regularText,
    lineHeight: METRICS.text.regularText * 1.5,
    fontFamily: FONTS.primary.regular,
    marginTop: 10,
  },
  infoCardWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: METRICS.margin.section.bottom,
  },
  menuListWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  signOutWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutText: {
    fontFamily: FONTS.primary.medium,
    textDecorationLine: 'underline',
  },
  version: {
    marginTop: 20,
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.caption,
  },
});

export default styles;
