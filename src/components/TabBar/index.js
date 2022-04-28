import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import User from 'assets/icons/svg/User.svg';
import List from 'assets/icons/svg/List.svg';
import Search from 'assets/icons/svg/Search.svg';

import colors from 'styles/colors';
import { METRICS } from 'styles/metrics';
import styles from './styles';

function getTabBarIcon(tabName, isFocused) {
  switch (tabName) {
    case 'Profile': {
      return (
        <User
          key={tabName}
          fill={isFocused ? colors.primaryColor : colors.dark}
          width={METRICS.tabIcon.width}
          height={METRICS.tabIcon.height}
        />
      );
    }
    case 'My Bookings': {
      return (
        <List
          key={tabName}
          fill={isFocused ? colors.primaryColor : colors.dark}
          width={METRICS.tabIcon.width}
          height={METRICS.tabIcon.height}
        />
      );
    }
    case 'Home': {
      return (
        <Search
          key={tabName}
          fill={isFocused ? colors.primaryColor : colors.dark}
          width={METRICS.tabIcon.width}
          height={METRICS.tabIcon.height}
        />
      );
    }
    default:
      return;
  }
}

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.base}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View key={`${label}-${route.key}`} style={styles.tab}>
            <TouchableOpacity
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityHint={`Navigates to the ${label} screen`}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
            >
              {getTabBarIcon(label, isFocused)}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

export default TabBar;
