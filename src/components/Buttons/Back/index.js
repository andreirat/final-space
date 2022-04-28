import React from 'react';
import { Pressable, Image } from 'react-native';
import { icons } from '../../../assets';

import { BackButtonProps } from './props';

import styles from './styles';

const BackButton = ({ onPress }: BackButtonProps) => (
  <Pressable style={styles.base} onPress={onPress}>
    <Image source={icons.back} style={styles.img} resizeMode="contain" />
  </Pressable>
);

export default BackButton;
