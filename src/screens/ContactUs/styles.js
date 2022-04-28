import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';
import { FONTS } from 'styles/fonts';
import { SCREEN_HEIGHT } from 'styles/metrics';

const styles = StyleSheet.create({
  base: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingHorizontal: METRICS.padding.screen.horizontal,
  },
  title: {
    fontFamily: FONTS.primary.medium,
    fontSize: METRICS.text.h3,
  },
  subtitle: {
    marginTop: 2,
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.regularText,
  },
  text: {
    marginTop: 2,
    fontFamily: FONTS.primary.light,
    fontSize: METRICS.text.smallText,
    colors: colors.lightGray,
  },
  textWrapper: {
    marginBottom: 30,
  },
  margin10Bottom: {
    marginBottom: 10,
  },
  submittedTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeInput: {
    height: SCREEN_HEIGHT / 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: { textAlignVertical: 'top' },
  buttonWrapper: {
    marginTop: 40,
  },
});

export default styles;
