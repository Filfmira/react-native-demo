import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native'



export default class Component3 extends Component{

    constructor(){
        super();
        this.state = {
            textValue: 'Hello',
            switchValue:false
        }
    }

    onChangeText(value){
        this.setState({
            textValue:value
        });
    }

    onSubmitEditing(){
        console.log('lol');
        
    }


    onSwitchChange(value){
        this.setState({
            switchValue:value
        });
    }

  render(){
    return(
      <View>
        <TextInput
        placeholder="Poe texto"
        value={this.state.textValue}
        onChangeText={(value) => this.onChangeText(value)}
        onSubmitEditing={this.onSubmitEditing}
        />
        <Text> {this.state.textValue}</Text>
        <Switch
        value={this.state.switchValue}
        onValueChange={(value)=> this.onSwitchChange(value)}
        />
        </View>
    )
  }
}


AppRegistry.registerComponent('Component3',() => Component3)