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

const TINT_COLOR = 'rgb(4, 159, 239)';

export default class Carrello extends React.Component {
  state = {
    foodlist : [],
    total : 0
  }

  _addFood = (item , counter) => {
    this.setState({foodlist : [...this.state.foodlist , {...item , counter }]})
  }

  _getTotal = () => {
    let total = 0;
    this.state.foodlist.map(food => total = total + food.price);
    this.setState({total : total})
  }

   //metodi per la flat list
  _renderRow = ({ item }) => (
   <View style = {{flexDirection : "row", width : "100%" , height : 40 , justifyContent : "space-around"}}>
    <Text>{item.counter}x</Text>
    <Text>{item.name}</Text>
    <Text>{item.price * item.counter} € </Text>
   </View>
  );

  _keyExtractor = (item, index) => {
    return String(index);
  };
  //////////////////////////////

componentDidMount() {
  let food = this.props.navigation.state.params.food;
  let counter = this.props.navigation.state.params.counter;
  (food && counter) ?  this._addFood()  : null;
  this._getTotal();
}

_renderRow = ()
  render () {
    return(
      <View>
        <ScrollView>
        <FlatList
          data={this.state.foodlist}
          renderItem={this._renderRow}
          keyExtractor={this._keyExtractor}
        />
        </ScrollView>
        <View style = {{flexDirection :"row" , width : "100%" , height : 20}}>
         <Text>TOTAL : {this.state.total} </Text>
        </View>
      </View>
    );
  }
}


Carrello.navigationOptions = ({ navigation }) => {
  return {
    title: 'Carrello',
    headerStyle: {
      backgroundColor: TINT_COLOR,
    },
    headerTintColor: 'white',
    headerLeft: null,
    headerRight: null
  };
};