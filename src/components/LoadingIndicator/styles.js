import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(75,73,73,0.3)',
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: '20%',
    padding: 25,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 0.08,
  },
});
