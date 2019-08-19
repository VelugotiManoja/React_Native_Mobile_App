import React from 'react';
import * as FontSize from '../components/FontSize';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Badge,Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

class SideMenu extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{height:180, backgroundColor: '#01BED1', justifyContent:'center', alignItems:'center'}}>
					<TouchableOpacity onPress={() => {
							this.props.navigation.navigate('UserProfile','Own')
							this.props.navigation.closeDrawer();
						}}>
						<Image style={{width:70, height:70,borderRadius: 35}}
						source={require('../assets/imagesfolder/profile_user.jpg')} />
					</TouchableOpacity>
					<Text allowFontScaling={false} style={{color:'#fff', fontSize:FontSize.normalize(16), fontWeight:'bold'}}>Christopher Nolan</Text>
					<Text allowFontScaling={false} style={{color:'#ececec', fontSize:FontSize.normalize(14)}}>Treasurer</Text>
					<View style={{marginTop:10,justifyContent:'center'}}>
					<Badge
						value={<Text allowFontScaling={false} style={{color:'#000',fontSize:12}}>Secunderabad - 0443</Text>}
						status="warning"
						badgeStyle={{marginRight: 5,padding:5,backgroundColor:'#fff'}} />
					</View>
				</View>
				<View>
				<Text allowFontScaling={false} style={styles.dialer}>Dialer</Text>
				<TouchableOpacity onPress={() => {
						this.props.navigation.navigate('Search')
						this.props.navigation.closeDrawer();
					}}>
				<View style={{flexDirection:'row',marginLeft:15,padding:10}}>
					<Icon name='search' style={styles.iconstyle}/>
					<Text allowFontScaling={false} style={styles.menuContent}>Search</Text>
				</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {
						this.props.navigation.navigate('CallHistory')
						this.props.navigation.closeDrawer();
					}}>
				<View style={{flexDirection:'row', marginLeft:15,padding:10}}>
					<Icon name='history' style={styles.iconstyle}/>
					<Text allowFontScaling={false} style={styles.menuContent}>Call History</Text>
				</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {
						this.props.navigation.navigate('FavoriteContacts')
						this.props.navigation.closeDrawer();
					}}>
				<View style={{flexDirection:'row',marginLeft:15,padding:10}}>
					<Icon name='favorite' style={styles.iconstyle}/>
					<Text allowFontScaling={false} style={styles.menuContent}>Favorites</Text>
				</View>
				</TouchableOpacity>
				</View>
				<Divider/>
				<View>
				<Text allowFontScaling={false} style={styles.dialer}>Settings</Text>
				<TouchableOpacity>
				<View style={{flexDirection:'row',marginLeft:15,padding:10}}>
					<FAIcon name='lock' style={styles.iconstyle}/>
					<Text allowFontScaling={false} style={styles.menuContent}>Change Password</Text>
				</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {
						this.props.navigation.navigate('Auth')
					}}>
				<View style={{flexDirection:'row', marginLeft:15,padding:10}}>
					<FAIcon name='lock' style={styles.iconstyle}/>
					<Text allowFontScaling={false} style={styles.menuContent}>Log Out</Text>
				</View>
				</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container : {
		flex       : 1,
	},
	dialer : {
		fontSize:FontSize.normalize(16),
		marginLeft:15,
		marginTop:10,
		marginBottom:10,
		color:'#333'
	},
	menuContent: {
		fontSize:FontSize.normalize(14),
		color:'#555'
	},
	iconstyle:{
		fontSize:FontSize.normalize(16),
		color:'#555',
		marginRight:10
	}
});
export default SideMenu;
