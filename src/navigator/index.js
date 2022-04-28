import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS
import Favorites from '../screens/Favorites';
import Episode from '../screens/Episode';
import { EpisodesStack } from './stacks/episodesStack';

import { tabStackOptions, stackOptions } from './helpers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={tabStackOptions}
      initialRouteName={'EpisodesStack'}
    >
      <Stack.Screen name="EpisodesStack" component={EpisodesStack} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Main'} screenOptions={stackOptions}>
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      <AppStack />
    </NavigationContainer>
  );
};

export default Router;
