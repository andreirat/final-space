import React from 'react';
import Icon from '../components/Icon';
import BackButton from '../components/Buttons/Back';
import { View } from 'react-native';
import { METRICS } from '../styles/metrics';
import common from '../styles/common';
import { icons } from '../assets';

export const getTabIcon = (routeName, focused) => {
  switch (routeName) {
    case 'EpisodesStack': {
      return focused ? icons.list.full : icons.list.gray;
    }
    case 'Favorites': {
      return focused ? icons.favorite.full : icons.favorite.gray;
    }
    case 'Characters': {
      return focused ? icons.character.full : icons.character.gray;
    }
    default:
      return null;
  }
};

export const tabStackOptions = ({ route }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  tabBarIcon: ({ focused }) => {
    return (
      <Icon style={METRICS.tabIcon} source={getTabIcon(route.name, focused)} />
    );
  },
});

export const stackOptions = () => ({
  headerShown: false,
  headerShadowVisible: false,
});
