/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {AppRegistry, Component, StyleSheet} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import ThrifteeRouter from './App/config/routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './App/Redux/indexReducer';
const createStoreWithMiddleware = applyMiddleware()(createStore);

import styles from './App/Styles/defaultStyles';

class LocalVisaMarket extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <ExNavigator initialRoute={ThrifteeRouter.getHomeRoute()}
          navigationBarStyle={styles.navBar}
          barButtonIconStyle={styles.barButton}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('LocalVisaMarket', () => LocalVisaMarket);
