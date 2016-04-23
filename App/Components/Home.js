import React, {
  Component
} from 'react-native';
import Products from './Products';

class Home extends Component {
  render() {
    return (
      <Products navigator={this.props.navigator} />
    );
  }
}

export default Home;
