import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Button from 'react-native-button';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={{uri: 'https://alicarnold.files.wordpress.com/2009/11/new-product.jpg'}}
        />
        <Text style={styles.welcome}>
          Product Title
        </Text>
        <Text style={styles.instructions}>
          $1000
        </Text>
        <Text style={styles.instructions}>
          Sam Edelman shoes epitomize chic comfort. With exceptional materials and fine styling, each pair of Sam Edelman shoes is an affordable luxury that cleverly combines a youthful outlook with a worldly sensibility. Sophistication with down-to-earth appeal mean that these shoes are made to be lived in.
        </Text>
        <Button style={styles.button}>
          Buy
        </Button>
        <Image
          style={styles.userIcon}
          source={{uri: 'https://cdn0.iconfinder.com/data/icons/metro-style-people-svg-icons/48/User_info-512.png'}}
        />
        <Text style={styles.welcome}>
          Seller Name
        </Text>
        <Image
          style={styles.sellerRating}
          source={{uri: 'http://ridesharegenius.com/wp-content/uploads/2015/03/5-stars-640x162.jpg'}}
        />
        <Text style={styles.welcome}>
          Delivery: 3 hours
        </Text>
        <Image
          style={styles.goButton}
          source={{uri: 'http://www.shopyourshape.com/wp-content/uploads/2014/06/goButton.png'}}
        />
      </View>
    );
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

export default Main;
