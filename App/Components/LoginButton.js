import Button from 'react-native-button';
import React, {
  Component,
  StyleSheet
} from 'react-native';
import Auth0Lock from 'react-native-lock';
import Firebase from 'firebase';
import FirebaseTokenGenerator from "firebase-token-generator";
import {default as Environment} from "../../environments";

// your firebase reference (from credentials.js)
let ref = new Firebase(Environment.FIREBASE_REF);

// your custom Auth0 Lock
let lock = new Auth0Lock({
  clientId: Environment.AUTH0_CLIENT,
  domain: Environment.AUTH0_DOMAIN,
});

class LoginButton extends Component {
  _login() {
    // show the lock
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
      }

      // firebase token: Firebase app configuration -> secrets
      var tokenGenerator = new FirebaseTokenGenerator(_getFirebaseToken());
      
      // use the token generator to create a new token with the userId
      var ref_token = tokenGenerator.createToken({ uid: profile.userId });

      ref.authWithCustomToken(ref_token, (error, authData) => {
        if (error) {
          console.log('Login Failed!');
        } else {
          console.log('Login Successful!');
          
          // now use your firebase reference to save some data for the user!
          var firebase_user_ref = ref.child('users').child(authData.uid);
          firebase_user_ref.push({
            "text": "I'm logged in!",
            "date": new Date().getTime(),
          });
        }
      });
    });
  }
  render() {
    return (
      <Button
        style={styles.button}
        onPress={this._login}>
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
