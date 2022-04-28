import React from 'react';
import { Text } from 'react-native';

import { TitleProps } from './props';

import styles from './styles';

const Title = ({ title, style }: TitleProps) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

export default Title;
