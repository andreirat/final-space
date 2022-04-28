import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const TutorialStep2 = props => {
  return (
    <View style={styles.base}>
      <View style={styles.header}>
        <Text style={styles.title}>Tutorial</Text>
        <Text style={styles.subtitle}>Tutorial step 2</Text>
      </View>
    </View>
  );
};

export default TutorialStep2;
