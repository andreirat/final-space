import React from 'react';
import { Animated, Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GRADIENT_START, GRADIENT_END } from 'config';

import styles from './styles';
import colors from 'styles/colors';

const DynamicTabBar = ({ tabs, opacity, activeIndex, onTabChange }) => {
  return (
    <Animated.View style={[styles.container, { opacity: opacity }]}>
      {tabs.map((tab, index) => (
        <Pressable
          key={index}
          style={styles.tab}
          onPress={() => onTabChange(index)}
        >
          <LinearGradient
            start={GRADIENT_START}
            end={GRADIENT_END}
            colors={
              activeIndex === index ? colors.primaryGradient : ['transparent']
            }
            style={styles.linearGradient}
          >
            <Text
              style={[
                styles.tabName,
                activeIndex === index
                  ? styles.activeTabName
                  : styles.inactiveTabName,
              ]}
            >
              {tab.name}
            </Text>
          </LinearGradient>
        </Pressable>
      ))}
    </Animated.View>
  );
};

export default DynamicTabBar;
