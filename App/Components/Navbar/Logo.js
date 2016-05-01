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
        <Image
          source={require('../../Assets/logo.png')}
          resizeMode={Image.resizeMode.contain}
          style={styles.logo} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  logo: {
    height: 40,
    backgroundColor: 'rgba(52,52,52,0)'
  }
});

export default Logo
