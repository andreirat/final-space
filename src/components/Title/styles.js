import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { METRICS } from '../../styles/metrics';
import { FONTS } from '../../styles/fonts';

export default StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: FONTS.primary.semiBold,
    fontSize: METRICS.text.title,
  },
});
