import React from 'react';
import { View, Text, StyleSheet, Linking, Animated, Dimensions } from 'react-native';
import { Icon, Card,Button,Divider } from 'react-native-elements';
import * as FontSize from './FontSize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class FavoriteComponent extends React.Component {

 constructor(props) {
	 super(props);

	 const maxOpacity=0.12;
	 this.state={
		maxOpacity,
		scaleValue: new Animated.Value(0.01),
		opacityValue: new Animated.Value(maxOpacity),
	 };
 }


  render() {
	  const {_onFavoriteIconClick,renderItem,renderKey,freqList,selectedItem, selectedKey}=this.props;
		return (
			<Card containerStyle={{
				width:width/2.25,
				height:'90%',
				borderRadius:6,
        marginLeft:10,
        marginRight:6
        }}
				imageStyle={{
					width:60,
					height:60,
					borderRadius:30,
					marginTop:14,
					overflow:'hidden',
					marginLeft:'auto',
					marginRight:'auto'}}
				image={require('../assets/imagesfolder/christopher.jpg')}
        >

				<View style={{position: 'absolute', right: 10, top:-67}}>
				<Icon name='favorite'
				color={freqList[renderKey].enable ? '#f62459' : '#A9A9A9'}
				onPress={() => _onFavoriteIconClick(renderItem, renderKey)} />
				</View>
				<Text allowFontScaling={false} style={{textAlign:'center', fontSize:FontSize.normalize(16), color:'#256DB1',fontWeight:'bold'}}>{renderItem.name}</Text>
				<Text allowFontScaling={false} style={{textAlign:'center', fontSize:FontSize.normalize(12),color:'#0B8FB7'}}>President</Text>
				<Text allowFontScaling={false} style={{textAlign:'center', fontSize:FontSize.normalize(12),color:'#0B8FB7'}}>Hyderabad-2789</Text>
				<Divider style={styles.divider} />
				<View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
					<Icon name='message' color='#3DD94A' size = {24} onPress={()=>{Linking.openURL('sms:7731084589')}}/>
					<Icon name='call' color='#008000' size = {24} onPress={()=>{Linking.openURL('tel:7731084589')}}/>
				</View>
			</Card>
	)
}
}
const styles = StyleSheet.create({
	container : {
		flex       : 1,
	},
	frequentsView:{
		marginLeft: 10,
		marginTop: 10,
		marginLeft :  15,
		flexDirection:'row',
		justifyContent: 'center'
	},
	textStyle:{
		color: '#777',
		fontWeight: 'bold',
		marginLeft: 15,
		marginTop: 10,
	},
	ImageBackgroundStyle:{
		width:60,
		height:60,
		marginRight: 10
	},
	iconView:{
		height: 50,
		width: 50,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute", //Here is the trick
		bottom: -10,
		right:-15,
		alignSelf: "flex-end"
	},
	divider:{
		backgroundColor: '#cecece',
		margin:2,
		shadowOffset:{  width: 1,  height: 1 },
		shadowOpacity: 1.0,
	  },
});
export default FavoriteComponent;
