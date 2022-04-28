import React from 'react';
import FastImage from 'react-native-fast-image';

import Title from '../Title';
import { HeaderProps } from './props';

import { backgrounds } from '../../assets';
import styles from './styles';

const Header = ({ title }: HeaderProps) => {
  return (
    <FastImage
      source={backgrounds.header}
      style={styles.container}
      resizeMode={FastImage.resizeMode.cover}
    >
      <Title title={title} />
    </FastImage>
  );
};

export default Header;
