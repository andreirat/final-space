import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const LinkButton = props => {
  return (
    <TouchableOpacity
      style={styles.base}
      activeOpacity={0.8}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
