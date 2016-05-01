import React, {
  Component,
  StyleSheet,
  PropTypes,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class DeliveryPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      pickup: props.pickup,
      collected: props.collected,
      contact: props.contact,
      image: props.image
    };
  }
  goBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxView}>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              resizeMode={Image.resizeMode.contain}
              source={{uri: this.state.image}}
            />
          </View>
          <Text style={styles.productTitle}>
            {this.state.name}
          </Text>
          <Text style={styles.pickup}>
            Pickup: {this.state.pickup}
          </Text>
          <Text style={styles.collected}>
            Estimated Collected: {this.state.collected}
          </Text>
          <Text style={styles.contact}>
            Contact: {this.state.contact}
          </Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => console.log('Pickup button clicked')}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Pickup
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
    backgroundColor: 'white'
  },
  boxView: {
    flex: 1,
    margin: 20
  },
  imageView: {

  },
  image: {
    height: 300
  },
  button: {
    height: 36,
    backgroundColor: '#f7b700',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 2,
    borderRadius: 5
  },
  productTitle: {
    fontSize: 20
  },
  pickup: {
    fontSize: 15
  },
  collected: {
    fontSize: 15
  },
  contact: {
    fontSize: 15
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
});

DeliveryPart.defaultProps = {
  name: 'iPhone 6s Plus 64GB',
  pickup: 'Douglas Road 2351, #909',
  collected: '8:50 PM',
  contact: 'Zac Thomas',
  image: 'http://www.qtrandev.com/thriftee/iphone.png'
};

module.exports = DeliveryPart;
