import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width
const SPLASH_IMG = require('../../res/splash.png')

class SplashScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      fadeAnim: new Animated.Value(0),
      scaleAnim: new Animated.Value(1)
    }
  }
  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();

    Animated.timing(
      this.state.scaleAnim,
      {
        toValue: 1.2,
        duration: 2000,
        delay: 1000
      }
    ).start()
  }
  render(){
    return (
      <View style={styles.container}>
        <Animated.Image
          source={SPLASH_IMG}
          style={{
            flex: 1,
            width: WINDOW_WIDTH,
            height: 1,
            opacity: this.state.fadeAnim,
            transform: [
              {scale: this.state.scaleAnim},
            ]
          }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  img: {
    flex: 1,
    width: WINDOW_WIDTH,
    height: 1
  }
});

export default SplashScreen
