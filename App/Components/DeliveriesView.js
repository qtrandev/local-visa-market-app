import React, {
  Component,
  StyleSheet,
  ScrollView,
  PropTypes,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import DeliveryItem from './DeliveryItem';

class DeliveriesView extends Component {
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
       <DeliveryItem
         key= {i}
         name= {item.name}
         time= {item.time}
         progress= {item.progress}
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

DeliveriesView.defaultProps = {
  items: [
    {
      name: 'iPhone 6s Plus 64GB',
      time: '4:50PM',
      progress: '80'
    },
    {
      name: 'Fitbit',
      time: '9:15PM',
      productImage: '20'
    }
  ]
};

module.exports = DeliveriesView;
