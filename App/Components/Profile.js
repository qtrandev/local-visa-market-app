import React, {
  View,
  Text,
  Component
} from 'react-native';
import styles from '../Styles/defaultStyles';
import Button from 'react-native-button';
import {default as env} from '../../environments';
import ThrifteeRouter from '../config/routes';


class Profile extends Component {
  getInitialState() {
    return {
      profile: null
    }
  }
  componentDidMount() {
    // In this case, the lock and token are retrieved from the parent component
    // If these are available locally, use `this.lock` and `this.idToken`
    // do something with props...
  }
  viewProduct() {
    this.props.navigator.push(ThrifteeRouter.getDetailRoute());
  }
  render() {
    if (this.state.profile) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.profile.nickname}, Welcome to {env.APP_NAME}
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
}

export default Profile;
