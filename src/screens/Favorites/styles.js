import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { METRICS } from '../../styles/metrics';
import { FONTS } from '../../styles/fonts';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  noResultsTitle: {
    fontSize: 20,
    fontFamily: FONTS.primary.medium,
    color: colors.gray,
    marginBottom: 10,
  },
  noResultsText: {
    fontSize: 15,
    fontFamily: FONTS.primary.regular,
    color: colors.gray,
    marginBottom: 10,
  },
  carouselWrapper: {
    marginTop: 20,
  },
  title: {
    marginVertical: 20,
    paddingHorizontal: METRICS.padding.screen.horizontal,
    color: colors.gray,
  },
});

export default styles;
