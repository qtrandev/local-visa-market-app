import React, {View,Image,StyleSheet} from 'react-native';
import Home from '../Components/Home';
import Button from 'react-native-button';
const Icon = require('react-native-vector-icons/FontAwesome');
const iconSize = 20;
let ThrifteeRouter = {
  getHomeRoute() {
    return {
      // Return a React component class for the scene. It receives a prop
      // called `navigator` that you can use to push on more routes.
      getSceneClass() {
        return Home;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Home Scene received focus.');
      },

      // You can render arbitrary views for the title component. Note that you
      // also need to implement getTitle if you want the title of this route to
      // show up in the back button to it.
      renderTitle() {
        return (
          <View style={styles.logoContainer}>
            <Image source={require('../Assets/logo.png')} style={styles.logo} />
          </View>
        );
      },

      getTitle() {
        return 'Products';
      },

      // Render the view to display on the right side of the navigation bar. It
      // is typically a button but doesn't have to be.
      renderRightButton() {
        return (
          <View style={styles.rbContainer}>
            <Button
              onPress={() => console.log('search button clicked')}>
              <Icon name="search" size={iconSize} color="rgb(241,170,38)" />
            </Button>
            <Button
              onPress={() => console.log('camera button clicked')}>
              <Icon name="camera" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
      renderLeftButton() {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => console.log('left button clicked')}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  }
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: 'rgba(52,52,52,0)'
  },
  rbContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default ThrifteeRouter;
