import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Button from 'react-native-button';
import ThrifteeRouter from '../config/routes';

class Dropoff extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.main}
          source={require('./drop.jpg')}
        />
        <Button
          style={styles.button}
          onPress={this.confirm.bind(this)}>
          Confirm
        </Button>
      </View>
    );
  }

  confirm() {
    console.log("Confirming...");
    console.log("Making Visa Pull request...");
    fetch('http://10.24.198.36:3000/push').then((response) => response.text())
    .then((responseText) => {
      console.log(responseText);
      this.props.navigator.push(ThrifteeRouter.getDetailRoute());
    })
    .catch((error) => {
      console.warn(error);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  button: {
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

export default Dropoff;
