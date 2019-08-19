import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { Header, Icon } from 'react-native-elements';

const MenuIcon = (props) => {
    return (
      <View>
        <TouchableOpacity onPress={() => props.navigation.headerProps.toggleDrawer()}>
            <Icon name='menu' color='#fff'/>
       </TouchableOpacity>
       </View>
    )
}

const HomeIcon = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.headerProps.navigate('Home')}>
            <Icon name='home' color='#fff'/>
       </TouchableOpacity>
    )
}

const HeaderComponent = (props) => {
    return (
        <View>
            <Header backgroundColor='#01BED1' containerStyle={{height:60}}
                        leftComponent={<MenuIcon navigation={props}/>}
                        centerComponent={{ text: props.headerTitle, style: { color: '#fff', fontSize:26 } }}
                        rightComponent={<HomeIcon navigation={props}/>}
            />
        </View>
    )
}

export default HeaderComponent;
