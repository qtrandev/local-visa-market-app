import React, {
  Component,
  StyleSheet,
  PropTypes,
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

import { replaceProducts } from '../Redux/indexAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

var me;

function mapStateToProps(state) {
  return {
    items: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    replaceProducts
  }, dispatch);
}

class Products extends Component {
  constructor(props) {
    super(props);
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
  refreshProducts() {
    this.props.replaceProducts(
      [
        {
          id: '4',
          productName: 'Nexus 5X',
          productDescription: 'The Nexus 5X is an engineering marvel.',
          productPrice: '$699',
          productImage: 'http://www.qtrandev.com/thriftee/iphone.png',
          sellerName: 'Zac Thomas'
        }
      ]
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        {this.props.items.map(this.renderPart)}
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
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.refreshProducts()}
          underlayColor='#bbbbbb'>
            <Text style={styles.buttonText}>
              Refresh Products
            </Text>
        </TouchableHighlight>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Powered by
          </Text>
          <Image
            style={styles.footerImage}
            resizeMode={Image.resizeMode.contain}
            source={require('../Assets/visa.png')}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
  renderPart(item,i) {
    return (
       <TouchableOpacity
        key={item.id}
        activeOpacity={0.5}
        onPress={() => me.viewProduct()}>
       <ProductPart
         key= {item.id}
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
  footer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181c5b'
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff'
  },
  footerImage: {
    marginBottom: 20
  },
});

Products.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
