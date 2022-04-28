import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const getCurrentLocation = () => {
  return Geolocation.getCurrentPosition(
    position => {
      return { success: true, position };
    },
    error => {
      // See error code charts below.
      return { success: false, errorCode: error.code };
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  );
};

async function requestPermissions() {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization('whenInUse');
    if (auth === 'granted') {
      return 'granted';
    }
  }

  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return 'granted';
    }
  }
}

export const checkAndAskPermission = permission => {
  check(permission)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          return;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      console.error(`${error}`);
    });
};

export const checkPermission = async permission => {
  check(permission)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          return 'unavailable';
        case RESULTS.DENIED:
          return 'denied';
        case RESULTS.LIMITED:
          return 'limited';
        case RESULTS.GRANTED:
          return 'granted';
        case RESULTS.BLOCKED:
          return 'blocked';
      }
    })
    .catch(error => {
      console.error(`${error}`);
    });
};

export const requestPermission = permission => {
  request(permission).then(result => {
    return result;
  });
};
