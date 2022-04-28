import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS
import Episodes from '../../screens/Episodes';
import Episode from '../../screens/Episode';

import { stackOptions } from '../helpers';

const Stack = createNativeStackNavigator();

export const EpisodesStack = () => (
  <Stack.Navigator initialRouteName={'Episodes'} screenOptions={stackOptions}>
    <Stack.Screen name="Episodes" component={Episodes} />
  </Stack.Navigator>
);
