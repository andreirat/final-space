import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingBottom: 20,
    backgroundColor: colors.white,
    elevation: 2,
  },
  tab: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
});
