import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Button from 'react-native-button';

class Products extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          onPress={this.requestVisaDirect.bind(this)}>
          Request Visa Direct API
        </Button>
      </View>
    );
  }

  requestVisaDirect() {
    console.log("Making Visa Direct request...");
    fetch('http://10.24.198.36:3000/visa').then((response) => response.text())
    .then((responseText) => {
      console.log(responseText);
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
    marginBottom: 7,
    borderWidth: 2,
    borderRadius: 2
  },
  icon: {
    width: 300,
    height: 300,
    borderWidth: 0.5,
    borderColor: 'black'
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

export default Products;
