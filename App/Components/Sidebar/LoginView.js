import React, {
  Component
} from 'react-native';
import Auth0LockScreen from './Auth0LockScreen';

class LoginView extends Component {
  componentDidMount() {
    this.refs['child'].login();
  }
  render() {
    return (
      <View>
        <Auth0LockScreen ref="child" />
      </View>
    );
  }
}

export default LoginView;
