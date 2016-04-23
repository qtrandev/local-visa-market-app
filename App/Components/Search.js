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
import CheckBox from 'react-native-checkbox';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      priceFrom: '',
      priceTo: '',
      catcheck1: false,
      catcheck2: false,
      catcheck3: false,
      catcheck4: false,
      catcheck5: false,
      catcheck6: false,
      catcheck7: false
    };
  }
  search() {
    Alert.alert('Search Products!');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => this.setState({search})}
            placeholder={'I\'m looking for...'}
            value={this.state.search}
          />
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>
            Price from
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({priceFrom})}
            placeholder={''}
            value={this.state.priceFrom}
          />
          <Text style={styles.priceText}>
            to
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({priceTo})}
            placeholder={''}
            value={this.state.priceTo}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.categoryTitle}>
            Categories
          </Text>
        </View>
        <View style={styles.descriptionView}>
          <View style={styles.categoryRow}>
            <Text style={styles.productDescription}>
              Cars & Motors
            </Text>
            <CheckBox
              label=''
              checked={this.state.catcheck1}
              onChange={(checked) => this.setState({catcheck1: checked})}
            />
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.productDescription}>
              Sports & Leisure
            </Text>
            <CheckBox
              label=''
              checked={this.state.catcheck2}
              onChange={(checked) => this.setState({catcheck2: checked})}
            />
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.productDescription}>
              Home & Garden
            </Text>
            <CheckBox
              label=''
              checked={this.state.catcheck3}
              onChange={(checked) => this.setState({catcheck3: checked})}
            />
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.productDescription}>
              Games & Consoles
            </Text>
            <CheckBox
              label=''
              checked={this.state.catcheck4}
              onChange={(checked) => this.setState({catcheck4: checked})}
            />
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.productDescription}>
              Books, Movies, & Music
            </Text>
            <CheckBox
              label=''
              checked={this.state.catcheck5}
              onChange={(checked) => this.setState({catcheck5: checked})}
            />
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.productDescription}>
              Fashion & Accessories
            </Text>
            <CheckBox
              label=''
              checked={this.state.catcheck6}
              onChange={(checked) => this.setState({catcheck6: checked})}
            />
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.productDescription}>
              Baby & Child
            </Text>
            <CheckBox
              label=''
              checked={this.state.catcheck7}
              onChange={(checked) => this.setState({catcheck7: checked})}
            />
          </View>
        </View>
        <View style={styles.backView}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.search()}
            underlayColor='#bbbbbb'>
              <Text style={styles.buttonText}>
                Search
              </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60
  },
  searchView: {
    margin: 20
  },
  descriptionView: {
    flexDirection: 'column',
    margin: 10
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backView: {
    margin: 10,
    alignItems: 'stretch'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
  },
  titleView: {
    margin: 10
  },
  categoryTitle: {
    fontSize: 25
  },
  priceView: {
    flexDirection: 'row',
    margin: 10
  },
  priceText: {
    fontSize: 20
  },
  textInput: {
    height: 30,
    width: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  deliveryText: {
    fontSize: 20
  },
  button: {
    height: 36,
    backgroundColor: '#123456',
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

module.exports = Search;
