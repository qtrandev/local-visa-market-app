import React, {
  Component,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';
import ThrifteeRouter from '../config/routes';

class SellerCreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      creditcard: '',
      expiration: '',
      ccv: ''
    };
  }
  signup() {
    Alert.alert('Signed up!');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fieldsView}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({name: text})}
            placeholder={'Name'}
            value={this.state.name}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({email: text})}
            placeholder={'Email'}
            value={this.state.email}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({password: text})}
            placeholder={'Password'}
            value={this.state.password}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({creditcard: text})}
            placeholder={'Credit Card'}
            value={this.state.creditcard}
          />
          <View style={styles.expirationView}>
            <TextInput
              style={styles.expirationInput}
              onChangeText={(text) => this.setState({expiration: text})}
              placeholder={'Expiration Date'}
              value={this.state.expiration}
            />
            <TextInput
              style={styles.ccvInput}
              onChangeText={(text) => this.setState({ccv: text})}
              placeholder={'CCV'}
              value={this.state.ccv}
            />
          </View>
        </View>
        <View style={styles.termsView}>
          <Text style={styles.termsText}>
            Terms and Conditions
          </Text>
        </View>
        <View style={styles.policyView}>
          <Text style={styles.policyText}>
            Privacy Policy
          </Text>
        </View>
        <View style={styles.signupView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.signup()}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Sign Up
              </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    marginTop: 60
  },
  fieldsView: {
    flex: 5,
    flexDirection: 'column',
    margin: 10
  },
  expirationView: {
    flex: 1,
    flexDirection: 'row',
  },
  termsView: {
    flex: 1,
    margin: 10,
    alignItems: 'flex-start'
  },
  policyView: {
    flex: 1,
    margin: 10,
    alignItems: 'flex-start'
  },
  signupView: {
    flex: 2,
    margin: 10,
    alignItems: 'stretch'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
  },
  expirationInput: {
    flex: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginRight: 10
  },
  ccvInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
  },
  termsText: {
    fontSize: 20
  },
  policyText: {
    fontSize: 20
  },
  button: {
    height: 36,
    backgroundColor: '#f7b700',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 2,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});

module.exports = SellerCreditCard;
