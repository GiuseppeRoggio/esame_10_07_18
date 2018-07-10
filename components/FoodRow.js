import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class FoodRow extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.toDetail}>
        <View style={styles.container}>
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: this.props.data.image }}
          />

          <View style={styles.viewText}>
            <Text style={styles.title}>{this.props.data.name}</Text>
            <Text style={styles.subtitle}>{this.props.data.info}</Text>
            <Text style={styles.price}>€ {this.props.data.price}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  viewText: {
    //borderWidth:1,
    //borderColor:"black",
    height: 140,
    marginLeft: 10,
    marginRight : 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
  price : {
    color: 'orange'
  }
});
