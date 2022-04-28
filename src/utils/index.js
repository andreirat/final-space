import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIos = (): boolean => Platform.OS === 'ios';

export const deviceHasNotch = () => DeviceInfo.hasNotch();
