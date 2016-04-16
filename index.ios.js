/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Main from './App/Components/Main';

class LocalVisaMarket extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Local Visa Market',
          component: Main
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('LocalVisaMarket', () => LocalVisaMarket);
