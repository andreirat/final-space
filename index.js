import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Root from './src/Root';

class App extends Component {
  render() {
    return <Root />;
  }
}

AppRegistry.registerComponent(appName, () => App);
