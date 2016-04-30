import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class DeliveryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      time: props.time,
      progress: props.progress
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.descriptionView}>
            <Text style={styles.productTitle}>
              {this.state.name}
            </Text>
            <Text style={styles.productDesc}>
              Estimated arrival at: {this.state.time}
            </Text>
          </View>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              resizeMode={Image.resizeMode.contain}
              source={{uri: 'http://www.qtrandev.com/thriftee/shopping.png'}}
            />
          </View>
        </View>
        <View style={styles.progressView}>
          <TouchableHighlight
            style={styles.progressButton}
            underlayColor='#bbbbbb'
            onPress={() => console.log('Progress clicked')}>
            <Text style={styles.progress}>
              Progress: {this.state.progress}%
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    marginTop: 50,
    backgroundColor: 'white'
  },
  topView: {
    flex: 1,
    flexDirection: 'row'
  },
  descriptionView: {
    margin: 10,
    alignItems: 'stretch'
  },
  progressView: {
    flex: 1,
    margin: 10
  },
  imageView: {
    flex: 1
  },
  image: {
    height: 100
  },
  progressButton: {
    flex: 1
  },
  progress: {
    fontSize: 20
  },
  productTitle: {
    fontSize: 20
  },
  productDesc: {
    fontSize: 16
  }
});

DeliveryItem.defaultProps = {
  name: 'iPhone 6s Plus 64GB',
  time: '8:50PM',
  progress: '50',
};

module.exports = DeliveryItem;
