import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { METRICS, SCREEN_HEIGHT } from '../../../styles/metrics';
import { FONTS } from '../../../styles/fonts';

export default StyleSheet.create({
  container: {
    borderRadius: METRICS.radius.cards.character,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 4,
    shadowColor: colors.gray3,
    shadowRadius: 4,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1343,
  },
  favoriteIcon: {
    height: 30,
    width: 30,
  },
  image: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.2,
    borderTopLeftRadius: METRICS.radius.cards.character,
    borderTopRightRadius: METRICS.radius.cards.character,
  },
  name: {
    color: colors.white,
    fontFamily: FONTS.primary.medium,
  },
  section: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionDetails: {
    marginLeft: 5,
    color: colors.white,
    fontFamily: FONTS.primary.regular,
  },
  imageGradient: {
    flex: 1,
    zIndex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  gradient: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 4,
    shadowColor: colors.gray3,
    shadowRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: METRICS.radius.cards.character,
    borderBottomRightRadius: METRICS.radius.cards.character,
  },
});
