import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { createAppContainer, createDrawerNavigator,createStackNavigator } from 'react-navigation';
import SideMenu from './sidedrawer';
import Search from './search';
import Otp from './otp';
import CallHistory from './callhistory';
import FavoriteContacts from './FavoriteContacts';
import { Icon } from 'react-native-elements';


const HomeComponent = () => {
	return (
		<View>
			<Text>Home Page</Text>
		</View>
	)
}

const AppNavigator = createAppContainer(
	createStackNavigator(
	{
	  Home  : {
      screen            : HomeComponent,
      navigationOptions : ({ navigation }) => ({
        title : `Home`
			})
		},
		SideMenu : {
			screen : SideMenu
		},
		Otp : {
		screen : Otp
		},
		Search : {
		screen : Search,
		navigationOptions : ({ navigation }) => ({
			title : `Search`
			})
		},
		CallHistory : {
			screen : CallHistory,
			navigationOptions : ({ navigation, screenProps, navigationOptions }) => ({
				title : `Call History`,
			})
		},
		FavoriteContacts : {
			screen : FavoriteContacts
		},
	},
	{
    initialRouteName         : 'Home',
    defaultNavigationOptions : ({navigation, screenProps}) => ({
			headerStyle      : {
				backgroundColor : '#01BED1'
			},
			headerTintColor  : 'white',
			headerTitleStyle : {
				fontWeight : 'bold',
				flex       : 1,
				textAlign  : 'center'
			},
			headerLeft : <TouchableOpacity onPress={() => {
				screenProps.rootNavigation.toggleDrawer();
			}}>
			<Icon name='menu' color='#fff'/>
		  </TouchableOpacity>
		})
  }
 )
);
  
export default class HomePage extends React.Component {
	render() {
		return (
			<AppNavigator screenProps={{
				rootNavigation: this.props.navigation
		  }}/>
		)
	}
}
