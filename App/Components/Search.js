import React, {
  Component,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';
import ThrifteeRouter from '../config/routes';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  search() {
    Alert.alert('Search Products!');
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.searchView}>
        <Text style={styles.productTitle}>
          Search Box
        </Text>
      </View>
        <View style={styles.descriptionView}>
          <Text style={styles.productTitle}>
            Title
          </Text>
          <Text style={styles.productDescription}>
            Description
          </Text>
          <Text style={styles.productDescription}>
            Category
          </Text>
          <Text style={styles.productDescription}>
            Price
          </Text>
        </View>
        <View style={styles.deliveryView}>
          <Text style={styles.deliveryText}>
            Total: $XX
          </Text>
        </View>
        <View style={styles.backView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.search()}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Search
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
  searchView: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
    height: 300
  },
  imageView: {
    width: 50,
    height: 50
  },
  descriptionView: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,

  },
  deliveryView: {
    margin: 10,
    alignItems: 'center'
  },
  backView: {
    margin: 10,
    alignItems: 'stretch'
  },
  image: {
    height: 50
  },
  price: {
    fontSize: 30,
    color: 'green'
  },
  productTitle: {
    fontSize: 20
  },
  productDescription: {

  },
  deliveryText: {
    fontSize: 20
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
  }
});

module.exports = Search;
