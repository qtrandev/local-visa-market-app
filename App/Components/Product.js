import React, {
  Component,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';
import Button from 'react-native-button';
import ThrifteeRouter from '../config/routes';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {productTitle: 'iPhone 6S Plus 64GB'};
  }
  viewProduct() {
    this.props.navigator.push(ThrifteeRouter.getProductRoute());
  }
  viewAccount() {
    this.props.navigator.push(ThrifteeRouter.getAccountRoute());
  }
  goHome() {
    this.props.navigator.popToTop();
  }
  buyProduct() {
    Alert.alert(
      'Congrats!',
      'Your ' + this.state.productTitle + ' is on its way.',
      [
        {text: 'Back'},
        {text: 'Track', onPress: () => this.viewAccount()},
      ]
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode={Image.resizeMode.contain}
            source={{uri: 'https://alicarnold.files.wordpress.com/2009/11/new-product.jpg'}}
          />
        </View>
        <View style={styles.priceView}>
          <TouchableHighlight
            style={styles.priceButton}
            underlayColor='#bbbbbb'
            onPress={() => this.buyProduct()}>
            <Text style={styles.price}>
              $1000
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.productTitle}>
            {this.state.productTitle}
          </Text>
          <Text style={styles.productDescription}>
            Description of the product.
          </Text>
        </View>
        <View style={styles.sellerView}>
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
        </View>
        <View style={styles.deliveryView}>
          <Text style={styles.deliveryText}>
            Delivery: 3 hours
          </Text>
        </View>
        <View style={styles.buyView}>
          <Image
            style={styles.goButton}
            source={{uri: 'http://www.shopyourshape.com/wp-content/uploads/2014/06/goButton.png'}}
          />
        </View>
        <View style={styles.backView}>
          <Button
            style={styles.button}
            onPress={() => this.goHome()}>
            Back
          </Button>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300
  },
  imageView: {

  },
  priceView: {
    margin: 10,
    alignItems: 'flex-end'
  },
  descriptionView: {
    margin: 10,
    alignItems: 'stretch'
  },
  sellerView: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deliveryView: {
    margin: 10,
    alignItems: 'center'
  },
  buyView: {
    alignItems: 'center'
  },
  backView: {
    margin: 10,
    alignItems: 'stretch'
  },
  image: {
    height: 300
  },
  priceButton: {
    backgroundColor: '#123456',
    padding: 5,
    borderRadius: 4
  },
  price: {
    fontSize: 30,
    color: 'green'
  },
  productTitle: {
    fontSize: 20
  },
  productDescription: {

  },
  userIcon: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  sellerRating: {
    width: 150,
    height: 30
  },
  deliveryText: {
    fontSize: 20
  },
  goButton: {
    width: 150,
    height: 150
  },
});

module.exports = Product;
