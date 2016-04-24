import React, {
  Component,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';
import ThrifteeRouter from '../config/routes';

class UploadProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '',
      price: ''
    };
  }
  listProduct() {
    Alert.alert('List Product!');
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.allImages}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode={Image.resizeMode.contain}
            source={{uri: 'http://www.qtrandev.com/thriftee/iphone.png'}}
          />
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode={Image.resizeMode.contain}
            source={{uri: 'http://www.qtrandev.com/thriftee/nike.png'}}
          />
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode={Image.resizeMode.contain}
            source={{uri: 'http://www.qtrandev.com/thriftee/bike.png'}}
          />
        </View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode={Image.resizeMode.contain}
            source={{uri: 'http://www.qtrandev.com/thriftee/iphone.png'}}
          />
        </View>
      </View>
        <View style={styles.descriptionView}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({title: text})}
            placeholder={'Title'}
            value={this.state.title}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({description: text})}
            placeholder={'Description'}
            value={this.state.description}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({category: text})}
            placeholder={'Category'}
            value={this.state.category}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({price: text})}
            placeholder={'Price'}
            value={this.state.price}
          />
        </View>
        <View style={styles.totalView}>
          <Text style={styles.totalText}>
            Total: $XX
          </Text>
        </View>
        <View style={styles.backView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.listProduct()}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                List Product
              </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 60
  },
  allImages: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
    height: 300
  },
  imageView: {
    width: 50,
    height: 50,
    margin: 4
  },
  descriptionView: {
    flex: 3,
    flexDirection: 'column',
    margin: 10
  },
  totalView: {
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
  },
  totalText: {
    fontSize: 20
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
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});

module.exports = UploadProduct;
