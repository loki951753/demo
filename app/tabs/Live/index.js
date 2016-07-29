import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class LiveTab extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Live
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
  },
});

export default LiveTab
