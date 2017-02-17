import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions, Router, Scene} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import configureStore from './store/configureStore';
import {Menu, Card, Syllable} from './pages';

const ConnectedRouter = connect()(Router);
const store = configureStore();

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key='menu' component={Syllable} title='Learn syllables'/>
    <Scene key='card' component={Card}/>
    <Scene key='syllable' component={Syllable}/>
  </Scene>
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes}/>
      </Provider>
    )
  }
}
