import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const TutorialStep3 = props => {
  return (
    <View style={styles.base}>
      <View style={styles.header}>
        <Text style={styles.title}>Tutorial</Text>
        <Text style={styles.subtitle}>Tutorial step 3</Text>
      </View>
    </View>
  );
};

export default TutorialStep3;
