import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

import styles from './styles';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.base}
        keyboardDismissMode="on-drag"
        scrollEnabled={false}
        keyboardShouldPersistTaps="always"
      >
        <Text>Register</Text>
      </ScrollView>
    );
  }
}
