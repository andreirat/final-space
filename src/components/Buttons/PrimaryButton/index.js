import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { icons } from 'assets';
import styles from './styles';

const PrimaryButton = ({
  activeOpacity,
  onPress,
  icon,
  text,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.base, style]}
      activeOpacity={activeOpacity || 0.7}
      onPress={onPress}
    >
      {icon && (
        <Image
          source={icon || icons.arrow.left}
          style={styles.img}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
