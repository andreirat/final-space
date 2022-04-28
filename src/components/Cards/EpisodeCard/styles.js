import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { METRICS, CONTENT_WIDTH, SCREEN_HEIGHT } from '../../../styles/metrics';
import { FONTS } from '../../../styles/fonts';

export default StyleSheet.create({
  name: {
    color: colors.white,
    fontFamily: FONTS.primary.medium,
    fontSize: METRICS.text.cardTitle,
  },
  date: {
    color: colors.white,
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.subtitle,
  },
  background: {
    borderRadius: METRICS.radius.cards.episodes,
    height: SCREEN_HEIGHT / 6,
    width: CONTENT_WIDTH,
    marginBottom: 30,
    justifyContent: 'flex-end',
  },
  gradient: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textWrapper: {
    flexDirection: 'column',
  },
});
