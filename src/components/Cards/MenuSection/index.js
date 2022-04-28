import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const MenuSection = ({ leftIcon, title, subtitle, children }) => {
  return (
    <View style={styles.base}>
      <View style={styles.topSection}>
        <View style={styles.leftIcon}>{leftIcon ? leftIcon : null}</View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default MenuSection;
