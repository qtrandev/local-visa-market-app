import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Button from 'react-native-button';
const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png';

class ThrifteeNavBar extends Component {
  render() {
    <View style={styles.container}>
      <Image style={styles.logo}
        source={{uri: logoUri}}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  bar: {
    flex: 1,
    flexDirection: 'row'
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconContainer: {
    flex: 2,
    flexDirection: 'row',

  }
});

export default ThrifteeNavBar;
