import React from 'react';
import { View } from 'react-native';

import BackgroundImage from 'components/BackgroundImage';
import { splash } from 'assets';
import styles from './styles';

function Splash() {
  return (
    <View style={styles.base}>
      <BackgroundImage
        source={splash.default}
        style={styles.headerContent}
        resizeMode="contain"
      />
    </View>
  );
}

export default Splash;
