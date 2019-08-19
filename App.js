import React, {Component} from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid,AsyncStorage} from 'react-native';
import { createAppContainer,createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Navigator from './src/navigators/navigators';
import Login from './src/navigators/loginNavigator';

// export default class App extends Component{
//   constructor(props){
//     super(props)
//   }
//     render(){
//       console.log(this.props)
//         return(
//             <Login/>
//         )
//     }
// }
export default createAppContainer(createSwitchNavigator(
  {
    App: Navigator,
    Auth: Login,
  },
  {
    initialRouteName: 'Auth',
  }
));
