import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
} from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.button}>
        <TouchableHighlight onPress = {this.props.toMenu}>
          <Text> Home </Text>
        </TouchableHighlight>
        </View>
       
        
        <View style={styles.button}>
        <TouchableHighlight onPress = {this.props.toCarrello}>
          <Text> Carrello </Text>
        </TouchableHighlight>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'lightgray',
    height: '100%',
    width : '50%',
    justifyContent : "center",
    alignItems : "center"
  },
});
