import Button from 'react-native-button';
import React, {
  Component,
  StyleSheet
} from 'react-native';

class LoginButton extends Component {
  render() {
    return (
      <Button style={styles.button}>
        Login
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: 'green',
    backgroundColor: 'brown',
    borderRadius: 4,
    borderWidth: 4,
    borderColor: 'blue'
  }
});

export default LoginButton;
