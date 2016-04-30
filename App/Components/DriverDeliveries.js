import React, {
  Component,
  StyleSheet,
  ScrollView,
  PropTypes,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import DeliveryPart from './DeliveryPart';

var me;

class DriverDeliveries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveries: props.deliveries
    };
    me = this;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        {this.state.deliveries.map(this.renderPart)}
        </ScrollView>
      </View>
    );
  }
  renderPart(item,i) {
    return (
       <TouchableOpacity
        key={i}
        activeOpacity={0.5}
        onPress={() => me.viewDelivery()}>
       <DeliveryPart
         key= {i}
         name= {item.name}
         pickup= {item.pickup}
         collected= {item.collected}
         contact= {item.contact}
         image= {item.image}
         style={styles.deliveryPart}/>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deliveryPart: {
    padding: 10
  },
});

DriverDeliveries.defaultProps = {
  deliveries: [
    {
      name: 'iPhone 6s Plus 64GB',
      pickup: 'Douglas Road 2351, #909',
      collected: '8:50 PM',
      contact: 'Zac Thomas',
      image: 'http://www.qtrandev.com/thriftee/iphone.png'
    },
    {
      name: 'Nike Jordan',
      pickup: '1420 Alton Road, #102',
      collected: '9:20 PM',
      contact: 'Michael Jardyn',
      image: 'http://www.qtrandev.com/thriftee/nike.png'
    },
    {
      name: 'Fixed Bike',
      pickup: '1200 Lincoln Road',
      collected: '9:50 PM',
      contact: 'Lance Sharapova',
      image: 'http://www.qtrandev.com/thriftee/bike.png'
    }
  ]
};

module.exports = DriverDeliveries;
