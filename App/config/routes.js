import React, {View,Image,StyleSheet} from 'react-native';
import Home from '../Components/Home';
import Button from 'react-native-button';
import Logo from '../Components/Navbar/Logo';
import LoginView from '../Components/Sidebar/LoginView';
import Product from '../Components/Product';
import Map from '../Components/Map';
import Account from '../Components/Account';
import Search from '../Components/Search';
import UploadProduct from '../Components/UploadProduct';
import DriverAccount from '../Components/DriverAccount';
import DriverDelivery from '../Components/DriverDelivery';
import CreditCard from '../Components/CreditCard';
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
          <Logo />
        );
      },

      getTitle() {
        return 'Products';
      },

      // Render the view to display on the right side of the navigation bar. It
      // is typically a button but doesn't have to be.
      renderRightButton(navigator) {
        return (
          <View style={styles.rbContainer}>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getSearchRoute())}>
              <Icon name="search" size={iconSize} color="rgb(241,170,38)" />
            </Button>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getUploadProductRoute())}>
              <Icon name="camera" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => console.log('pushed left button')}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      }
    }
  },
  getLoginRoute() {
    return {
      renderScene(navigator) {
        return <LoginView navigator={navigator} />;
      },
      onDidFocus(event) {
        console.log('Login Screen received focus.');
      },

      renderTitle() {
        <Logo />
      },

      getTitle() {
        return 'Login';
      },

      renderRightButton() {

      },
      renderLeftButton() {

      }
    };
  },
  getProductRoute() {
    return {
      getSceneClass() {
        return Product;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Product Scene received focus.');
      },

      renderTitle() {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Pay';
      },

      renderRightButton(navigator) {
        return (
          <View style={styles.rbContainer}>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getSearchRoute())}>
              <Icon name="search" size={iconSize} color="rgb(241,170,38)" />
            </Button>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getUploadProductRoute())}>
              <Icon name="camera" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  },
  getMapRoute() {
    return {
      getSceneClass() {
        return Map;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Map Scene received focus.');
      },

      renderTitle() {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Map';
      },

      renderRightButton(navigator) {

      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  },
  getAccountRoute() {
    return {
      getSceneClass() {
        return Account;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Map Scene received focus.');
      },

      renderTitle() {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Account';
      },

      renderRightButton(navigator) {
        return (
          <View style={styles.rbContainer}>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getSearchRoute())}>
              <Icon name="search" size={iconSize} color="rgb(241,170,38)" />
            </Button>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getUploadProductRoute())}>
              <Icon name="camera" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  },
  getDriverAccountRoute() {
    return {
      getSceneClass() {
        return DriverAccount;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Driver Account Scene received focus.');
      },

      renderTitle() {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Driver Account';
      },

      renderRightButton(navigator) {

      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  },
  getDriverDeliveryRoute() {
    return {
      getSceneClass() {
        return DriverDelivery;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Driver Delivery Scene received focus.');
      },

      renderTitle(navigator) {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Driver Delivery';
      },

      renderRightButton(navigator) {

      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  },
  getUploadProductRoute() {
    return {
      getSceneClass() {
        return UploadProduct;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Upload Product Scene received focus.');
      },

      renderTitle(navigator) {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Upload Product';
      },

      renderRightButton(navigator) {
        return (
          <View style={styles.rbContainer}>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getSearchRoute())}>
              <Icon name="search" size={iconSize} color="rgb(241,170,38)" />
            </Button>
            <Button
              onPress={() => navigator.pop()}>
              <Icon name="camera" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  },
  getSearchRoute() {
    return {
      getSceneClass() {
        return Search;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Search Scene received focus.');
      },

      renderTitle(navigator) {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Search';
      },

      renderRightButton(navigator) {
        return (
          <View style={styles.rbContainer}>
            <Button
              onPress={() => navigator.pop()}>
              <Icon name="search" size={iconSize} color="rgb(241,170,38)" />
            </Button>
            <Button
              onPress={() => navigator.push(ThrifteeRouter.getUploadProductRoute())}>
              <Icon name="camera" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
              <Icon name="bars" size={iconSize} color="rgb(241,170,38)" />
            </Button>
          </View>
        );
      },
    };
  },
  getCreditCardRoute() {
    return {
      getSceneClass() {
        return CreditCard;
      },

      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Credit Card Scene received focus.');
      },

      renderTitle(navigator) {
        return (
          <Logo />
        );
      },

      getTitle() {
        return 'Credit Card';
      },

      renderRightButton(navigator) {

      },
      renderLeftButton(navigator) {
        return (
          <View style={styles.lbContainer}>
            <Button
              onPress={() => navigator.resetTo(ThrifteeRouter.getHomeRoute())}>
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
