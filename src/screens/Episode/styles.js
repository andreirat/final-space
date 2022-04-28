import { StyleSheet } from 'react-native';
import { METRICS, SCREEN_HEIGHT } from '../../styles/metrics';
import colors from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
  },
  background: {
    height: SCREEN_HEIGHT / 3,
    justifyContent: 'flex-end',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteIcon: {
    height: 30,
    width: 30,
  },
  gradient: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: METRICS.padding.screen.horizontal,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  name: {
    color: colors.dark,
    fontFamily: FONTS.primary.bold,
    fontSize: METRICS.text.title,
  },
  content: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: METRICS.padding.screen.horizontal,
    paddingTop: 30,
  },
  container: {
    backgroundColor: colors.white,
  },
  sectionWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    marginLeft: 10,
    color: colors.gray,
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.cardTitle,
  },
  bold: {
    fontFamily: FONTS.primary.medium,
  },
  carouselWrapper: {
    marginTop: 60,
  },
});

export default styles;
