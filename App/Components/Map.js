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
    title: 'iPhone 6s Plus 64GB',
    subtitle: 'Miami Beach, Florida'
  },
  {
    latitude: 25.686017,
    longitude: -80.335296,
    title: 'Fitbit',
    subtitle: 'Miami, Florida'
  },
  {
    latitude: 25.886017,
    longitude: -80.335296,
    title: 'Dell Laptop',
    subtitle: 'Miami Lakes, Florida'
  }
];

class Map extends Component {
  goBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
          <MapView
          style={styles.map}
          region={{
            latitude: 25.786017,
            longitude: -80.135296,
            latitudeDelta: 5,
            longitudeDelta: 5
          }}
          overlays={[{
          coordinates:[
            {latitude: 25.786017, longitude: -80.135296},
            {latitude: 25.686017, longitude: -80.335296},
            {latitude: 25.886017, longitude: -80.335296},
            {latitude: 25.786017, longitude: -80.135296},
          ],
          strokeColor: '#f007',
          lineWidth: 10,
        }]}
          annotations={markers}/>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.goBack()}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Back
              </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
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
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
});

module.exports = Map;
