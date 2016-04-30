import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import ThrifteeRouter from '../config/routes';
import ProductPart from './ProductPart';

var me;

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
    me = this;
  }
  login() {
    this.props.navigator.push(ThrifteeRouter.getLoginRoute());
  }
  viewProduct() {
    this.props.navigator.push(ThrifteeRouter.getProductRoute());
  }
  viewMap() {
    this.props.navigator.push(ThrifteeRouter.getMapRoute());
  }
  viewAccount() {
    this.props.navigator.push(ThrifteeRouter.getAccountRoute());
  }
  viewDriverDelivery() {
    this.props.navigator.push(ThrifteeRouter.getDriverDeliveryRoute());
  }
  viewDriverAccount() {
    this.props.navigator.push(ThrifteeRouter.getDriverAccountRoute());
  }
  viewCreditCard() {
    this.props.navigator.push(ThrifteeRouter.getCreditCardRoute());
  }
  viewSellerSignUp() {
    this.props.navigator.push(ThrifteeRouter.getSellerSignUpRoute());
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        {this.state.items.map(this.renderPart)}
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.login()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Login
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.viewProduct()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Buy
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.viewMap()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Map
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.viewAccount()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              View Account
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.viewDriverAccount()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Driver Account
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.viewDriverDelivery()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Driver Delivery
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.viewCreditCard()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Credit Card
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.viewSellerSignUp()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Seller Sign Up
            </Text>
        </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
  renderPart(item,i) {
    return (
       <TouchableOpacity
        key={i}
        activeOpacity={0.5}
        onPress={() => me.viewProduct()}>
       <ProductPart
         key= {i}
         productName= {item.productName}
         productDescription= {item.productDescription}
         productPrice= {item.productPrice}
         productImage= {item.productImage}
         sellerName= {item.sellerName}
         style={styles.productPart}/>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productPart: {
    padding: 10
  },
  button: {
    height: 36,
    backgroundColor: '#123456',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 2,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
});

Products.defaultProps = {
  items: [
    {
      productName: 'iPhone 6s Plus 64GB',
      productDescription: 'The iPhone is an engineering marvel.',
      productPrice: '$699',
      productImage: 'http://www.qtrandev.com/thriftee/iphone.png',
      sellerName: 'Zac Thomas'
    },
    {
      productName: 'Nike Jordan',
      productDescription: 'The best shoes money can buy.',
      productPrice: '$149',
      productImage: 'http://www.qtrandev.com/thriftee/nike.png',
      sellerName: 'Michael Jardyn'
    },
    {
      productName: 'Fixed Bike',
      productDescription: 'Fixed-speed bikes are the best bikes for casual riding.',
      productPrice: '$130',
      productImage: 'http://www.qtrandev.com/thriftee/bike.png',
      sellerName: 'Lance Sharapova'
    }
  ]
};

module.exports = Products;
