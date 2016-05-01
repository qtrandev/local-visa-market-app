import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Alert,
  View,
  TabBarIOS
} from 'react-native';
import ThrifteeRouter from '../config/routes';
var DriverCompleted = require('./DriverCompleted');
var DriverDeliveries = require('./DriverDeliveries');

class DriverAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Billy Howard',
      selectedTab: 'deliveries'
    };
  }
  goHome() {
    this.props.navigator.popToTop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userView}>
          <Image
            style={styles.userIcon}
            source={{uri: 'http://www.qtrandev.com/thriftee/driver.png'}}
          />
          <Text style={styles.userName}>
            {this.state.userName}
          </Text>
          <Image
          style={styles.userRating}
          source={{uri: 'http://ridesharegenius.com/wp-content/uploads/2015/03/5-stars-640x162.jpg'}}
          />
        </View>
        <View style={styles.accountView}>
          <TabBarIOS
          selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item
              title="Deliveries"
              selected={this.state.selectedTab === 'deliveries'}
              onPress={() => {
                this.setState({
                  selectedTab: 'deliveries',
                });
              }}>
              <DriverDeliveries />
            </TabBarIOS.Item>
            <TabBarIOS.Item
            title="Completed"
            selected={this.state.selectedTab === 'completed'}
            onPress={() => {
              this.setState({
                selectedTab: 'completed',
              });
            }}>
            <DriverCompleted />
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'column',
    marginTop: 60,
    backgroundColor: '#181c5b'
  },
  userView: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  accountView: {
    flex: 5,
    margin: 10
  },
  userIcon: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  userName: {
    fontSize: 15,
    color: 'white'
  },
  userRating: {
    width: 150,
    height: 30
  },
});

module.exports = DriverAccount;
