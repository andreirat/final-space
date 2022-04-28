import { StyleSheet } from 'react-native';
import { METRICS } from 'styles/metrics';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';
import { SCREEN_HEIGHT } from 'styles/metrics';
import { CONTENT_WIDTH } from 'styles/metrics';

export default StyleSheet.create({
  emptyStateContainer: {
    flex: 1,
    paddingTop: METRICS.padding.screen.top,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emptyStateIllustration: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  illustrationWrapper: {
    height: SCREEN_HEIGHT / 3.5,
    width: CONTENT_WIDTH,
    marginBottom: 20,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    width: CONTENT_WIDTH,
  },
  title: {
    marginBottom: 20,
    color: colors.gray,
    textAlign: 'center',
    fontFamily: FONTS.primary.bold,
    fontSize: METRICS.text.h4,
  },
  headerWrapper: {
    width: CONTENT_WIDTH,
  },
  emptyText: {
    color: colors.gray2,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.largeText,
    marginBottom: 50,
  },
  linkText: {
    textAlign: 'center',
    marginTop: 10,
    color: colors.gray2,
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.mediumText,
  },
  signUp: { textDecorationLine: 'underline' },
});
