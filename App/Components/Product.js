import React, {
  Component,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import Button from 'react-native-button';

const Product = () => {
  <Image
    style={styles.icon}
    source={{uri: this.props.data.uri}}
  />
  <Text style={styles.description}>
    {this.props.data.title}
  </Text>
  <Text style={styles.price}>
    ${this.props.data.price}
  </Text>
  <Text style={styles.details}>
    Sam Edelman shoes epitomize chic comfort. With exceptional materials and fine styling, each pair of Sam Edelman shoes is an affordable luxury that cleverly combines a youthful outlook with a worldly sensibility. Sophistication with down-to-earth appeal mean that these shoes are made to be lived in.
  </Text>
  <Button style={styles.button}
    onPress={this.props.onPress}
  >
    Buy
  </Button>
};

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  price: {
    textAlign: 'start',
    color: '#333333',
    marginBottom: 5,
  },
  details: {
    textAlign: 'end',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 7,
    borderWidth: 2,
    borderRadius: 2
  },
  icon: {
    width: 300,
    height: 300,
    borderWidth: 0.5,
    borderColor: 'black'
  }
});
