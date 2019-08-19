import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer,createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import {Icon } from 'react-native-elements';
import Search from '../screens/search';
import CallHistory from '../screens/callhistory';
import FavoriteContacts from '../screens/FavoriteContacts';
import SideMenu from '../screens/sidedrawer';
import UserProfile from '../screens/userProfile';
import SwitchIconComponent from '../components/SwitchIconComponent';
import BottomIcon from 'react-native-vector-icons/MaterialIcons';


//Tab navigator
const TabNavigator = createAppContainer(
createBottomTabNavigator({
  Search: { screen: Search,
    navigationOptions:{
  					tabBarOptions: {
  						showLabel: false,
  						activeTintColor  : '#01BED1'
  					},
  					tabBarIcon: ({ tintColor }) => (
  						<View>
  							<BottomIcon name='search' color={tintColor} size={24}/>
  						</View>),
  				}, },
  CallHistory: { screen: CallHistory,
    navigationOptions:{
          tabBarOptions: {
            showLabel: false,
            activeTintColor  : '#01BED1'
          },
          tabBarIcon: ({ tintColor }) => (
            <View>
              <BottomIcon name='history' color={tintColor} size={24}/>
            </View>),
        }, },
  FavoriteContacts: { screen: FavoriteContacts,
    navigationOptions:{
          tabBarOptions: {
            showLabel: false,
            activeTintColor  : '#01BED1'
          },
          tabBarIcon: ({ tintColor }) => (
            <View>
              <BottomIcon name='favorite' color={tintColor} size={24}/>
            </View>),
        }
   },
}, {
  order: ['CallHistory', 'Search', 'FavoriteContacts']
})
)


//Drawer Navigators
const DrawerNavigator = createAppContainer (
	createDrawerNavigator(
	{
    Home:{
        screen: TabNavigator
    }
	},
	{
		initialRouteName	    : 'Home',
		contentComponent      : SideMenu,
		drawerWidth           : 230,
		drawerPosition        : 'left',
		drawerBackgroundColor : '#cecece'
	}
	)
);


//Stack navigator
const StackNavigator = createAppContainer(
createStackNavigator({
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{
  defaultNavigationOptions: ({navigation ,screenProps})=>({
  title:navigation.state.routes[0].index === 0 ? 'Call History' : navigation.state.routes[0].index === 1 ? 'Search' : 'Favorite',
  headerTitleStyle: {
    color: '#fff',
    marginLeft:-10
  },
   headerStyle: {
     backgroundColor: '#01BED1',
   },
   headerLeft :<TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                <View style={{marginLeft:8}}>
                <Icon name='menu' color='#fff'/>
                </View>
              </TouchableOpacity>,
              headerRight :<TouchableOpacity>
              <View style={{marginRight:8}}>
                {navigation.state.routes[0].index === 0 && <SwitchIconComponent />}
              </View>
            </TouchableOpacity>
 }),
})
)


export default  StackNavigator;
