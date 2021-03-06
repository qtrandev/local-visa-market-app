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

class SoldView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
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
  items: [
    {
      productName: 'Dell Laptop',
      productPrice: '$1000',
      productImage: 'http://www.qtrandev.com/thriftee/laptop.png'
    },
    {
      productName: 'Canon EOS 5D',
      productPrice: '$3200',
      productImage: 'http://www.qtrandev.com/thriftee/canon.png'
    }
  ]
};

module.exports = SoldView;
