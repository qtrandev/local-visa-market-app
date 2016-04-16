import React, {
  Component,
  Text,
  View
} from 'react-native';
import LoginButton from './LoginButton';
import styles from '../Styles/defaultStyles';

class Main extends Component {
  showLock() {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.props.lock.show();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <LoginButton onClick={this.showLock} />
      </View>
    );
  }
}

export default Main;
