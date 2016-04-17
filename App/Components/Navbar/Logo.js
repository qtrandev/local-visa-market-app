import React, {
  View,
  Image,
  Component,
  StyleSheet
} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../Assets/logo.png')} style={styles.logo} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  logo: {
    backgroundColor: 'rgba(52,52,52,0)'
  }
});

export default Logo
