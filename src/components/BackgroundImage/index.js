import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';

const BackgroundImage = props => {
  if (!props.source) {
    return props.children;
  }

  return (
    <ImageBackground
      style={[styles.background, props.style]}
      source={props.source}
      resizeMode={props.resizeMode || 'cover'}
    >
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImage;
