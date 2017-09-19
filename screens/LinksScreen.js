import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Alert, Text } from 'react-native';
//import { Placeholder } from '../assets/util/icons';

export default class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Links',
  };
  _onPressButton() {
    Alert.alert('Dzwonię na policję!')
  }

  render() {
    return (
    <View style={styles.MainButtons}>
      <View style={styles.BigButton}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
        <View style={{width: 330, height: 200, backgroundColor: 'pink'}} >
        <Text style={styles.policeText}>Call The Police</Text>
        </View>
        </TouchableHighlight>
      </View>
      <View style={styles.EmergencyButtons}>
        <View style={{width: 105, height: 150, backgroundColor: 'steelblue'}} />
        <View style={{width: 105, height: 150, backgroundColor: 'steelblue'}} />
        <View style={{width: 105, height: 150, backgroundColor: 'steelblue'}} />
      </View>
      <View style={styles.EmergencyButtons}>
        <View style={{width: 105, height: 150, backgroundColor: 'steelblue'}} />
        <View style={{width: 105, height: 150, backgroundColor: 'steelblue'}} />
        <View style={{width: 105, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  MainButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    shadowOpacity: 2,
    shadowRadius: 2
   
  },
  BigButton: {
    alignItems: 'center',
    flex: 0,
    padding: 1,
    marginHorizontal: 20,
    marginVertical: 10

  },
  MainButtons: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 10
  },
  EmergencyButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1
  },
  policeText: {
    padding: 40,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "500"
  }
})

