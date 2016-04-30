import React, {
  Component,
  StyleSheet,
  ScrollView,
  PropTypes,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import ProductItem from './ProductItem';

var me;

class SoldView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.solditems
    };
    me = this;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        {this.state.items.map(this.renderPart)}
        </ScrollView>
      </View>
    );
  }
  renderPart(item,i) {
    return (
       <TouchableOpacity
        key={i}
        activeOpacity={0.5}
        onPress={() => console.log("Product Item button clicked")}>
       <ProductItem
         key= {i}
         productName= {item.productName}
         productPrice= {item.productPrice}
         productImage= {item.productImage}
         style={styles.productItem}/>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productItem: {
    padding: 10
  },
});

SoldView.defaultProps = {
  solditems: [
    {
      productName: 'iPhone 6s Plus 64GB',
      productPrice: '$699',
      productImage: 'http://www.qtrandev.com/thriftee/iphone.png'
    },
    {
      productName: 'Nike Jordan',
      productPrice: '$199',
      productImage: 'http://www.qtrandev.com/thriftee/nike.png'
    },
    {
      productName: 'Fixed Bike',
      productPrice: '$130',
      productImage: 'http://www.qtrandev.com/thriftee/bike.png'
    }
  ]
};

module.exports = SoldView;
