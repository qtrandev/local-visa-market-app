import React, {
  Component,
  StyleSheet,
  ScrollView,
  MapView,
  PropTypes,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var markers = [
  {
    latitude: 25.786017,
    longitude: -80.135296,
    title: 'Home',
    subtitle: 'Miami Beach, Florida'
  },
  {
    latitude: 25.686017,
    longitude: -80.335296,
    title: 'Work',
    subtitle: 'Miami, Florida'
  }
];

class DriverDelivery extends Component {
  goBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxView}>
          <MapView
          style={styles.map}
          region={{
            latitude: 25.786017,
            longitude: -80.135296,
            latitudeDelta: 50,
            longitudeDelta: 50
          }}
          annotations={markers}/>
          <Text style={styles.productTitle}>
            Product Title
          </Text>
          <Text style={styles.pickup}>
            Pickup: Douglas Road 2351, #909
          </Text>
          <Text style={styles.collected}>
            Estimated Collected: 8:50 PM
          </Text>
          <Text style={styles.contact}>
            Contact: Seller Name
          </Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.goBack()}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Back
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
    marginTop: 60
  },
  boxView: {
    flex: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40
  },
  map: {
    flex: 1
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

module.exports = DriverDelivery;
