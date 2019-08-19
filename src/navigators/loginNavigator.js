import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import UserProfile from '../screens/userProfile';
import Otp from '../screens/otp';



//Stack navigator
const StackNavigator = createAppContainer(
createStackNavigator({
  Otp:{
    screen:Otp
  },
  UserProfile:{
    screen:UserProfile
  }
},{
    initialRouteName:'Otp'
})
)


export default  StackNavigator;
