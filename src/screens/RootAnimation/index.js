import React from 'react';
import { Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { BlurView } from '@react-native-community/blur';

import { animations } from 'assets';
import styles from './styles';

const RootAnimation = ({ opacity, show, animation }) => {
  if (!show) {
    return null;
  }

  return (
    <Animated.View style={[styles.base, { opacity }]}>
      <LottieView
        style={styles.animation}
        source={animations[animation]}
        autoPlay
        loop
      />
      <BlurView style={styles.blur} blurType={'light'} blurAmount={3} />
    </Animated.View>
  );
};

export default RootAnimation;
