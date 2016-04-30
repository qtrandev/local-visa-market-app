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

class BoughtView extends Component {
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

BoughtView.defaultProps = {
  items: [
    {
      productName: 'Fitbit',
      productPrice: '$30',
      productImage: 'http://www.qtrandev.com/thriftee/fitbit.png'
    },
    {
      productName: 'Supreme Skateboard',
      productPrice: '$120',
      productImage: 'http://www.qtrandev.com/thriftee/skateboard.png'
    }
  ]
};

module.exports = BoughtView;
