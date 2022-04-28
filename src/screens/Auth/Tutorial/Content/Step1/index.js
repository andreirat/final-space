import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const TutorialStep1 = props => {
  return (
    <View style={styles.base}>
      <View style={styles.header}>
        <Text style={styles.title}>Tutorial</Text>
        <Text style={styles.subtitle}>Tutorial step 1</Text>
      </View>
    </View>
  );
};

export default TutorialStep1;
