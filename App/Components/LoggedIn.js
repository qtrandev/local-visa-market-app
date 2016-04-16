import React from 'react-native'

var LoggedIn = React.createClass({
  getInitialState: function() {
    return {
      profile: null
    }
  },

  componentDidMount: function() {
    // In this case, the lock and token are retrieved from the parent component
    // If these are available locally, use `this.lock` and `this.idToken`
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      this.setState({profile: profile});
    }.bind(this));
  },

  render: function() {
    if (this.state.profile) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.profile.nickname}, Welcome to ThrifteeLocal
          </Text>
        </View>
      );
    } else {
      return (
        <div className="loading">Loading profile</div>
      );
    }
  }
});

default export LoggedIn;
