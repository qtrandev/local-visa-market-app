import Button from 'react-native-button';
import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import Auth0Lock from 'react-native-lock';
import Firebase from 'firebase';
import FirebaseTokenGenerator from "firebase-token-generator";
import {default as Env} from "../../../environments";
import styles from '../../Styles/defaultStyles';

class Auth0LockScreen extends Component {
  constructor(props) {
    super(props);
    this.lock = new Auth0Lock({
      clientId: Env.AUTH0_CLIENT,
      domain: Env.AUTH0_DOMAIN
    });
    this.ref = new Firebase(Env.FIREBASE_REF)
    this.tg = new FirebaseTokenGenerator(Env.FIREBASE_SECRET);
  }
  login() {
    // show the lock
    this.lock.show({}, this._submit.bind(this));
  }
  _submit(err, profile, token) {
    if (err) {
      console.error(err);
    }
    
    // use the token generator to create a new token with the userId
    var ref_token = this.tg.createToken({ uid: profile.userId });

    this.ref.authWithCustomToken(ref_token, this._handleLoginResponse.bind(this));
  }
  _handleLoginResponse(error, authData) {
    if (error) {
      console.log('Login Failed!');
    } else {
      console.log('Login Successful!');
      
      // now use your firebase reference to save some data for the user!
      var firebase_user_ref = this.ref.child('users').child(authData.uid);
      firebase_user_ref.push({
        "text": "I'm logged in!",
        "date": new Date().getTime()
      });
      this.props.navigator.push({
        title: 'Profile',
        component: Main,
        passProps: {lock: this.lock, idToken: authData.uid}
      });
    }
  }
  render() {
    return(<View />);
  }
}

export default Auth0LockScreen;
