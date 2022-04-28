import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';
import { FONTS } from 'styles/fonts';
import { SCREEN_HEIGHT } from 'styles/metrics';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: METRICS.padding.screen.horizontal,
  },
  paragraph: {
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.smallText,
  },
  webViewContainer: {
    width: '100%',
    height: '100%',
  },
  webView: {
    marginTop: -(SCREEN_HEIGHT / 5),
  },
});

export default styles;
