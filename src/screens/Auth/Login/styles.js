import { StyleSheet } from 'react-native';
import { METRICS } from 'styles/metrics';
import commonStyles from 'styles/common';
import { CONTENT_WIDTH } from 'styles/metrics';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: METRICS.padding.screen.horizontal,
    paddingTop: METRICS.margin.screen.top + 20,
    paddingBottom: METRICS.padding.screen.bottom,
    paddingVertical: METRICS.padding.screen.vertical,
  },
  content: {
    marginBottom: 50,
  },
  formWrapper: {
    width: CONTENT_WIDTH,
    marginTop: 120,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonsWrapper: {
    width: '100%',
    marginBottom: 10,
  },
  iconWrapper: {
    marginBottom: METRICS.margin.input.bottom,
  },
  title: {
    ...commonStyles.regularText,
  },
  subtitle: {
    marginTop: 5,
    ...commonStyles.h4,
  },
});

export default styles;
