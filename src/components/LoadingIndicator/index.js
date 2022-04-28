import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const LoadingIndicator = () => {
  return (
    <View style={styles.base}>
      <ActivityIndicator size="small" />
    </View>
  );
};

export default LoadingIndicator;
