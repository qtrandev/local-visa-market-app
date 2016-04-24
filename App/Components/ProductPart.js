import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'react-native-button';

class ProductPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: props.productName,
      productDescription: props.productDescription,
      productPrice: props.productPrice,
      productImage: props.productImage,
      sellerName: props.sellerName
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode={Image.resizeMode.contain}
            source={{uri: this.state.productImage}}
          />
        </View>

        <View style={styles.priceView}>
          <TouchableHighlight
            style={styles.priceButton}
            underlayColor='#bbbbbb'
            onPress={() => console.log('Price clicked')}>
            <Text style={styles.price}>
              {this.state.productPrice}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.productTitle}>
            {this.state.productName}
          </Text>
          <Text style={styles.productDescription}>
            {this.state.productDescription}
          </Text>
        </View>
        <View style={styles.sellerView}>
          <Image
            style={styles.userIcon}
            source={{uri: 'https://cdn0.iconfinder.com/data/icons/metro-style-people-svg-icons/48/User_info-512.png'}}
          />
          <Text style={styles.welcome}>
            {this.state.sellerName}
          </Text>
          <Image
            style={styles.sellerRating}
            source={{uri: 'http://ridesharegenius.com/wp-content/uploads/2015/03/5-stars-640x162.jpg'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
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
  image: {
    height: 300
  },
  priceButton: {
    backgroundColor: '#f7b700',
    padding: 5
  },
  price: {
    fontSize: 30,
    color: 'white'
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
  }
});

ProductPart.defaultProps = {
  productName: 'Billy Howard',
  productDescription: 'Description of product',
  productPrice: '$1234',
  productImage: 'http://www.qtrandev.com/thriftee/iphone.png',
  sellerName: 'Barry Thomas'
};

module.exports = ProductPart;
