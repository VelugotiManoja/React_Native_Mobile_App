import React, { Component } from 'react';
import {
	Alert,
	View,
	StyleSheet,
	Image,
	Text,
	Dimensions,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import * as FontSize from '../components/FontSize';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HideView from '../components/HideView';


const width = Dimensions.get('window').width;

export default class Otp extends Component {
    static navigationOptions = {
        header: null,
        };
	constructor(props) {
		super(props);

		this.state = {
			phoneNumber    : '',
			otp						 : '',
			inputEditable  : false,
			buttonDisabled : true,
			hideSignInButton  : true
		};
	}

	onSubmit() {
		this.props.navigation.navigate('App');
	}

	getOtp = () => {
		if(this.state.phoneNumber.length == 10){
			Alert.alert('OTP sent Successfully')
				this.setState({
					inputEditable: true,
					hideSignInButton: false
				})
		} else {
			Alert.alert('Mobile Number should contain 10 digits')
		}
	};
handleChangeText = (otp)=>{
	this.setState({otp:otp})
	if(this.state.otp.length == 5){
		this.setState({buttonDisabled:false})
	}
}
	render() {
		return (
			<View style={styles.container}>
			<ScrollView
			contentContainerStyle={{flexGrow: this.state.hideSignInButton ? 0.2 : 0.6,  alignItems : 'center',justifyContent: 'space-between'}}>
			<View style={{marginTop:55,marginBottom:15}}>
			  <Image
              source={require('../assets/imagesfolder/ROTARYLogo.png')} style={{width:150,height:150}}
          />
					<View style={{marginTop:10,justifyContent: 'center',flexDirection: 'row'}}>
					<Text style={{color:'#fff'}} allowFontScaling={false}>Powered by  </Text>
					<Image
	              source={require('../assets/imagesfolder/CIMPLogo.jpg')} style={{width:20,height:25}}
	          />
					</View>
			</View>

			<View>
					<TextInput
						keyboardType="numeric"
						value={this.state.phoneNumber}
						onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
						placeholder={'Enter Phone Number'}
						placeholderTextColor="#454C69"
						style={styles.inputPhoneNumber}
						maxLength={10}
						allowFontScaling={false}
					/>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={this.getOtp.bind(this)}
					>
					<Text
					style={{color:'#fff',textAlign:'right',marginRight:25,fontSize:FontSize.normalize(16),color:'#86CEEB',fontWeight:'bold'}}
					allowFontScaling={false}
				>
					GET OTP
					</Text>
					</TouchableOpacity>
					</View>

					<HideView hide={this.state.hideSignInButton}>
					<TextInput
						keyboardType="numeric"
						value={this.state.otp}
						onChangeText={this.handleChangeText}
						placeholder={'Enter 6-Digit OTP'}
						placeholderTextColor="#3e4661"
						style={this.state.inputEditable == false ? [styles.inputPhoneNumber,styles.disabledTextInput] : styles.inputPhoneNumber}
						maxLength={6}
						editable={this.state.inputEditable == false ? false : true}
						allowFontScaling={false}
					/>
					<Button
							title="Sign In"
							containerStyle={{marginLeft:'auto',marginRight:'auto'}}
							buttonStyle={{borderColor:'#F9BD11',borderRadius:30,width:120,backgroundColor:'#F9BE10'}}
							disabledStyle={{backgroundColor:'#777'}}
							titleStyle={{color:'#242544'}}
							titleProps={{allowFontScaling:false}}
							disabledTitleStyle={{color:'#999'}}
							disabled={this.state.buttonDisabled == true ? true : false}
							onPress={this.onSubmit.bind(this)}
					/>
					</HideView>
			</ScrollView>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		backgroundColor: '#242544',
		//color:'#67FCF1'
	},
	inputPhoneNumber : {
		paddingVertical   : 0,
		paddingLeft       : 10,
		paddingRight      : 20,
		marginLeft        : 20,
		marginRight       : 20,
		zIndex            : -1,
		width             : width - 60,
		height            : 44,
		fontSize		  : FontSize.normalize(20),
		borderWidth       : 2,
		borderColor       : '#777',
		borderRadius 	  : 30,
		marginTop		  : 10,
		marginBottom	  : 15,
		color			  : '#fff'
	},
	disabledTextInput:{
		borderColor:'#484E6D',
		top:5
	},
	SignInButton:{
		marginTop         : 10,
		width             : width - 60,
		borderRadius 	  : 30,
	}
});
