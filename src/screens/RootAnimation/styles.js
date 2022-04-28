import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(71, 193, 192, 0.2)',
  },
  animation: { width: 200, zIndex: 100, height: 200 },
});

export default styles;
