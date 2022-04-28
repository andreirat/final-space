import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS
import { MyBookings } from 'screens/MyBookings';
import { Booking } from 'screens/Booking';

import { translate } from 'utils';
import { stackOptions } from '../helpers';

const UserBookingsStack = createNativeStackNavigator();

export const BookingsStack = () => (
  <UserBookingsStack.Navigator
    initialRouteName={'My Bookings'}
    screenOptions={stackOptions}
  >
    <UserBookingsStack.Screen name="My Bookings" component={MyBookings} />
    <UserBookingsStack.Screen
      name="Booking"
      component={Booking}
      options={{ headerTitle: translate('edit_profile', true) }}
    />
  </UserBookingsStack.Navigator>
);
