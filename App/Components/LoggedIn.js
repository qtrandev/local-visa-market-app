import React, {
  View,
  Text
} from 'react-native';
import styles from '../Styles/defaultStyles';
import Button from 'react-native-button';
import Product from './Product';


var LoggedIn = React.createClass({
  getInitialState: function() {
    return {
      profile: null
    }
  },
  componentDidMount: function() {
    // In this case, the lock and token are retrieved from the parent component
    // If these are available locally, use `this.lock` and `this.idToken`
    // do something with props...
  },
  viewProduct: function() {
    this.props.navigator.push({
      title: 'Products',
      component: Product,
      passProps: {navigator: this.props.navigator}
    });
  },
  render: function() {
    if (this.state.profile) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.profile.nickname}, Welcome to ThrifteeLocal
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Loading profile...
          </Text>
          <Button 
            style={styles.button}
            onPress={this.viewProduct.bind(this)}>
            View available products
          </Button>
        </View>
      );
    }
  }
});

export default LoggedIn;
