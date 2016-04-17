import React, {View,Image,StyleSheet} from 'react-native';
import Main from '../Components/Main';
import Button from 'react-native-button';
var Icon = require('react-native-vector-icons/FontAwesome');
let ThrifteeRouter = {
  getHomeRoute() {
    return {
      // Return a React component class for the scene. It receives a prop
      // called `navigator` that you can use to push on more routes.
      getSceneClass() {
        return Main;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Main Scene received focus.');
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
          <Button
            style={styles.rightButton}
            onPress={() => { console.log('Tapped right button'); }}>
            <Icon name="rocket" size={30} color="#900" />
          </Button>
        );
      },
    };
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: 'rgba(52,52,52,0)'
  },
  logo: {
    backgroundColor: 'rgba(52,52,52,0)',
    justifyContent: 'center'
  },
  rightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default ThrifteeRouter;
