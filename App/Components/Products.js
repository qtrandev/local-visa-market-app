import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import Button from 'react-native-button';

class Products extends Component {

  render() {
    var pList = this.props.products.map((product, i) => {
      <Product data={product} onPress={handlePurchase(product.id)} key={i} />
    });
    return (
      <View style={styles.container}>
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
