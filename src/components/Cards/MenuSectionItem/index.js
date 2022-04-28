import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { icons } from 'assets';
import Icon from 'components/Icon';

const MenuSectionItem = ({ leftIcon, title, subtitle, onPress, showArrow }) => {
  return (
    <TouchableOpacity style={styles.base} onPress={onPress} activeOpacity={0.6}>
      <View style={styles.topSection}>
        <View>
          <Icon source={leftIcon} style={styles.leftIcon} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      {showArrow && (
        <View style={styles.rightArrow}>
          <Icon source={icons.arrow.right} style={styles.rightArrowIcon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MenuSectionItem;
