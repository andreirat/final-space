import React from 'react';
import { StatusBar, View, LogBox } from 'react-native';

import commonStyles from './styles/common';
import RootNavigator from './navigator';

const Root = () => {
  LogBox.ignoreAllLogs();

  return (
    <View style={commonStyles.base}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#FFF"
      />
      <RootNavigator />
    </View>
  );
};

export default Root;
