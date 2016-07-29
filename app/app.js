import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//vendor
import TabNavigator from 'react-native-tab-navigator'

//native modules
import SplashScreen from './common/SplashScreen'
//tabs
import HomeTab from './tabs/Home'
import LiveTab from './tabs/Live'
import FollowTab from './tabs/Follow'
import ProfileTab from './tabs/Profile'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      hasSplashed: false,
      selectedTab: 'home'
    }
  }
  componentDidMount() {
    setTimeout(
      () => {
        this.setState({hasSplashed: true});
      },
      3000,
    );
  }
  render() {
    if (this.state.hasSplashed) {
      return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            onPress={() => this.setState({ selectedTab: 'home' })}
            >
            <HomeTab />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'live'}
            title="直播"
            onPress={() => this.setState({ selectedTab: 'live' })}
            >
            <LiveTab />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'follow'}
            title="关注"
            onPress={() => this.setState({ selectedTab: 'follow' })}
            >
            <FollowTab />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="我的"
            onPress={() => this.setState({ selectedTab: 'profile' })}
            >
            <ProfileTab />
          </TabNavigator.Item>
        </TabNavigator>
      );
    }else{
      return <SplashScreen />
    }
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
