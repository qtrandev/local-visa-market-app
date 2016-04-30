import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'react-native-button';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: props.productName,
      productPrice: props.productPrice,
      productImage: props.productImage
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

        <View style={styles.descriptionView}>
          <Text style={styles.productTitle}>
            {this.state.productName}
          </Text>
          <TouchableHighlight
            style={styles.priceButton}
            underlayColor='#bbbbbb'
            onPress={() => console.log('Price clicked')}>
            <Text style={styles.price}>
              {this.state.productPrice}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'white'
  },
  imageView: {
    marginTop: 20
  },
  descriptionView: {
    flex: 1,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  }
});

ProductItem.defaultProps = {
  productName: 'iPhone',
  productPrice: '$1234',
  productImage: 'http://www.qtrandev.com/thriftee/iphone.png',
};

module.exports = ProductItem;
