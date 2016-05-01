import React, {
  Component,
  StyleSheet,
  ScrollView,
  PropTypes,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import CompletedItem from './CompletedItem';

class DriverCompleted extends Component {
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
      <View style={styles.productItem} key={i}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => console.log("Completed Item button clicked")}>
        <CompletedItem
          productName= {item.productName}
          productPrice= {item.productPrice}
          driverName= {item.driverName}
          pickupAddress= {item.pickupAddress}
          pickupDate= {item.pickupDate}
          pickupTime= {item.pickupTime}
          dropoffAddress= {item.dropoffAddress}
          dropoffDate= {item.dropoffDate}
          dropoffTime= {item.dropoffTime}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productItem: {
    padding: 20
  },
});

DriverCompleted.defaultProps = {
  items: [
    {
      productName: 'Beats Headphones',
      productPrice: '45',
      driverName: 'Billy',
      pickupAddress: '420 Lincoln Road, Miami Beach',
      pickupDate: 'February 23, 2016',
      pickupTime: '4:15PM',
      dropoffAddress: '1111 Alton Road, Miami Beach',
      dropoffDate: 'February 23, 2016',
      dropoffTime: '7:15PM'
    },
    {
      productName: 'iPhone',
      productPrice: '45',
      driverName: 'Billy',
      pickupAddress: '420 Lincoln Rd, Miami Beach',
      pickupDate: 'February 23, 2016',
      pickupTime: '4:15PM',
      dropoffAddress: '1111 Alton Rd, Miami Beach',
      dropoffDate: 'February 23, 2016',
      dropoffTime: '7:15PM'
    }
  ]
};

module.exports = DriverCompleted;
