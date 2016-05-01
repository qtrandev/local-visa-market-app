import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class CompletedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: props.productName,
      productPrice: props.productPrice,
      driverName: props.driverName,
      pickupAddress: props.pickupAddress,
      pickupDate: props.pickupDate,
      pickupTime: props.pickupTime,
      dropoffAddress: props.dropoffAddress,
      dropoffDate: props.dropoffDate,
      dropoffTime: props.dropoffTime
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>
            Good job, {this.state.driverName}!
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.productTitle}>
            {this.state.productName}
          </Text>
        </View>
        <View style={styles.pickupView}>
          <Text style={styles.headerTitle}>
            Pickup
          </Text>
          <Text style={styles.text}>
            Address: {this.state.pickupAddress}
          </Text>
          <Text style={styles.text}>
            Date: {this.state.pickupDate}
          </Text>
          <Text style={styles.text}>
            Time: {this.state.pickupTime}
          </Text>
        </View>
        <View style={styles.dropoffView}>
          <Text style={styles.headerTitle}>
            Drop Off
          </Text>
          <Text style={styles.text}>
            Address: {this.state.dropoffAddress}
          </Text>
          <Text style={styles.text}>
            Date: {this.state.dropoffDate}
          </Text>
          <Text style={styles.text}>
            Time: {this.state.dropoffTime}
          </Text>
        </View>
        <View style={styles.priceView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => console.log('Price Won button clicked')}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                You won ${this.state.productPrice}
              </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  headerView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7b700'
  },
  titleView: {
    flex: 1,
    padding: 10
  },
  pickupView: {
    flex: 1,
    padding: 10
  },
  dropoffView: {
    flex: 1,
    padding: 10
  },
  priceView: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 10
  },
  headerTitle: {
    fontSize: 18,
    paddingBottom: 10,
  },
  productTitle: {
    fontSize: 20
  },
  text: {
    fontSize: 16
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

CompletedItem.defaultProps = {
  productName: 'Beats Headphones',
  productPrice: '45',
  driverName: 'Billy',
  pickupAddress: '420 Lincoln Rd, Miami Beach',
  pickupDate: 'February 23, 2016',
  pickupTime: '4:15PM',
  dropoffAddress: '1111 Alton Rd, Miami Beach',
  dropoffDate: 'February 23, 2016',
  dropoffTime: '7:15PM'
};

module.exports = CompletedItem;
