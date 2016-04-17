/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {AppRegistry, Component} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import ThrifteeRouter from './App/config/routes';

import styles from './App/Styles/defaultStyles';

class LocalVisaMarket extends Component {
  render() {
    return (
      <ExNavigator initialRoute={ThrifteeRouter.getHomeRoute()} />
    );
  }
}

AppRegistry.registerComponent('LocalVisaMarket', () => LocalVisaMarket);
