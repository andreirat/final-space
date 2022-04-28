import { StyleSheet } from 'react-native';
import colors from 'styles/colors';
import { FONTS } from 'styles/fonts';
import { METRICS } from 'styles/metrics';

export default StyleSheet.create({
  base: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: METRICS.radius.input,
    height: METRICS.height.input,
    flexDirection: 'row',
    padding: METRICS.padding.input,
  },
  error: {
    borderColor: colors.error,
    borderWidth: 1,
  },
  input: {
    fontFamily: FONTS.primary.regular,
    fontSize: METRICS.text.mediumText,
    flex: 1,
    padding: 0,
    marginRight: 5,
    marginLeft: 10,
  },
});
