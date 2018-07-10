import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';

const TINT_COLOR = 'rgb(4, 159, 239)';

let prova = {
  name: 'Pistacchio',
  category: 'Pizze Speciali',
  ingredients: ['Philadelphia', 'Mozzarella', 'Speck', 'Pistacchio'],
  image:
    'https://www.pistacchissimo.it/images/articles/PizzaPistacchioPap%C3%A8Catania.jpg',
  price: 5.5,
  info:
    'La pizza al pistacchio di Bronte, arricchita con la mozzarella di bufala, Ã¨ uno sfizio da provare almeno una volta',
};

export default class Detail extends React.Component {
  state = {
    food: {},
    counter: 0,
    ingredientString : ""
  };

  _getFood = () => {
     const food = this.props.navigation.state.food;
    this.setState({food : food});
  }

  _readIngredients = () => {
    let ingr = "";
    this.state.food.ingredients.map(i => {ingr = ingr + i
                                          ingr = ingr + ","});
    this.setState({ingredientString : ingr})
  }

  componentDidMount(){
    this._getFood();
    this._readIngredients();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: '50%' }}
          source={{ uri: this.state.food.image }}
        />
        <View>
          <View style={styles.titleView}>
            <Text style= {styles.title}> {this.state.food.name} </Text>
            <Text style = {styles.price}> {this.state.food.price} </Text>
          </View>
          <Text>{this.state.ingredientString}</Text>
          <View style={styles.counter}>
            <Button title="-" onPress={() => {(this.state.counter>0) ? 
                                                this.setState({counter : this.state.counter-1}) :
                                                this.setState({counter : 0})
                                              }}/>
            <Text>{this.state.counter}</Text>
            <Button title="+" onPress={() => this.setState({counter : this.state.counter+1})} />
          </View>
          <Button title = "Aggiungi al Carrello" onPress={this.props.navigation.navigate("Carrello", {food : this.state.food , counter : this.state.counter})} />
        </View>
      </View>
    );
  }
}

Detail.navigationOptions = ({ navigation }) => {
  return {
    title: 'Detail',
    headerStyle: {
      backgroundColor: TINT_COLOR,
    },
    headerTintColor: 'white',
    headerRight: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    //backgroundColor: "yellow",
    padding: 20,
  },
  titleView: {
    height : 20,
    width : "100%",
    flexDirection : "row",
  },
   title: {
    fontSize: 20,
    fontWeight: '500',
  },
  price : {
    color: 'orange'
  },
  counter : {
    flexDirection : "row",
    width : "90%",
    height : 20,
    justifyContent: "center",
    alignItems : "center",
    padding : 30
  }

});
