import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Button from 'react-native-button';
import ThrifteeRouter from '../config/routes';

class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.main}
          source={require('./home.jpg')}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.leftButton}
            onPress={this.handleLogin.bind(this)}>
            Login
          </Button>
          <Button
            style={styles.rightButton}
            onPress={this.openProduct.bind(this)}>
            View
          </Button>
        </View>
      </View>
    );
  }
  handleLogin() {
    console.log('Navigating to auth0 lock screen');
    this.props.navigator.push(ThrifteeRouter.getLoginRoute());
  }

  openProduct() {
    console.log("Open product...");
    this.props.navigator.push(ThrifteeRouter.getDetailRoute());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rightButton: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 2
  },
  leftButton: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 2
  },
  main: {
    width: 320,
    height: 568
  },
  userIcon: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  sellerRating: {
    width: 100,
    height: 30
  },
  goButton: {
    width: 150,
    height: 150
  },
});

export default Start;
