import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'components/Icon';
import { GRADIENT_START, GRADIENT_END } from 'config';

import colors from 'styles/colors';
import styles from './styles';

const GradientButton = ({
  reversed,
  activeOpacity,
  onPress,
  icon,
  text,
  baseStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.base, baseStyle]}
      activeOpacity={activeOpacity || 0.7}
      onPress={onPress}
    >
      <LinearGradient
        start={GRADIENT_START}
        end={GRADIENT_END}
        colors={reversed ? colors.reversedGradient : colors.primaryGradient}
        style={styles.linearGradient}
      >
        {icon && <Icon source={icon} style={styles.img} />}
        <Text
          style={[
            styles.text,
            { color: reversed ? colors.primaryColor : colors.white },
          ]}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
