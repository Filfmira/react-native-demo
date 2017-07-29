import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native'


import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';


export default class myapp extends Component{

  render(){
    return(
      <Navigator 
      initialRoute={{id: 'component5'}}
      renderScene={this.renderScene}
      configureScene={(route,routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    )
  }
}


AppRegistry.registerComponent('myapp',() => myapp)