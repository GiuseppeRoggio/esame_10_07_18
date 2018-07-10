import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import FoodRow from '../components/FoodRow';
import Footer from '../components/Footer';

const TINT_COLOR = 'rgb(4, 159, 239)';

export default class Menu extends React.Component {
  state = {
    foodlist: [],
  };
//navigation method
_toMenu = () => {
  this.props.navigation.navigate("Menu");
}

_toCarrello = () => {
  this.props.navigation.navigate("Carrello");
}

_toDetail = ({item}) => {
  this.props.navigation.navigate("Detail" , {food : item})
}


//gestione lista food
  _getFoods = () => {
    const foods = 'http://www.dmi.unict.it/~calanducci/LAP2/food.json';
    fetch(foods)
      .then(response => response.json())
        .then(jsonResponse => {
          let array = jsonResponse.data;
         // console.log("array : " + array);
          this.setState({foodlist : array})
         // console.log("State : " + this.state.foodlist);
        })
  }

  _filterFoods = (value) => {
    let array = this.state.foodlist;
    array.filter(row => 
      (row.category.indexOf(value) > -1 || row.name.indexOf(value) > -1) ? row : null
    )
    console.log(array);
    this.setState({foodlist : array});

  }
/////////////////////////////////////


  async componentDidMount() {
   await  this._getFoods();
  }

  //metodi per la flat list
  _renderRow = ({ item }) => (
    <FoodRow 
      data={item} 
      onDetail={() => this._toDetail(item)} 
    />
  );

  _keyExtractor = (item, index) => {
    return String(index);
  };
  //////////////////////////////

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          onChangeText={(value) => this._filterFoods(value)}
          onClearText={this._getFoods()}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Cerca Piatti..."
        />
        <ScrollView>
        <FlatList
          data={this.state.foodlist}
          renderItem={this._renderRow}
          keyExtractor={this._keyExtractor}
        />
        </ScrollView>
        <Footer toMenu = {() => this._toMenu} toCarrello = {() => this._toCarrello()}/>
      </View>
    );
  }
}

Menu.navigationOptions = ({ navigation }) => {
  return {
    title: 'Menu',
    headerStyle: {
      backgroundColor: TINT_COLOR,
    },
    headerTintColor: 'white',
    headerLeft: null,
    headerRight: (
      <TouchableOpacity onPress={() => null}>
        <Text style={{ color: 'white' }}>Filters</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    //borderColor: 'black',
    flex: 1,
    justifyContent: 'space-between',
    alignItem: 'stretch',
  },
});
