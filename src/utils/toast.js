import Toast from 'react-native-toast-message';

const showErrorToast = (text2 = 'Please try again') => {
  Toast.show({
    type: 'error',
    text1: 'Something went wrong',
    text2,
    autoHide: true,
  });
};

export { showErrorToast };
