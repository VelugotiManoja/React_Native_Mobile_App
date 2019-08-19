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
import InputComponent from '../components/Input';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
			buttonDisabled : true
		};
	}

	onSubmit() {
		Alert.alert('Logged in Successfully');
		this.props.navigation.navigate('UserProfile')
	}

	getOtp = () => {
		Alert.alert('123')
		if(this.state.phoneNumber.length == 10){
				this.setState({inputEditable: true})
		}
	};
handleChangeText = (otp)=>{
	this.setState({otp:otp})
	console.log(this.state.otp)
	console.log(this.state.otp.length)
	if(this.state.otp.length == 5){
		this.setState({buttonDisabled:false})
	}
}
	render() {
		return (
			<View style={styles.container}>
			<ScrollView contentContainerStyle={{flexGrow: 1,  alignItems : 'center'}}>
			<View style={{marginTop:55,marginBottom:30}}>
			  <Image
              source={require('../assets/imagesfolder/ROTARYLogo.png')} style={{width:150,height:150}}
          />
					<View style={{marginTop:10,justifyContent: 'center',flexDirection: 'row'}}>
					<Text style={{color:'#fff'}}>Powered by  </Text>
					<Image
	              source={require('../assets/imagesfolder/CIMPLogo.jpg')} style={{width:20,height:25}}
	          />
					</View>
			</View>

			<View style={{justifyContent: 'space-around',flex: 0.8}}>
			<View style={{top:28}}>
					<TextInput
						keyboardType="numeric"
						value={this.state.phoneNumber}
						onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
						placeholder={'Enter Phone Number'}
						placeholderTextColor="#454C69"
						style={styles.inputPhoneNumber}
						maxLength={10}
					/>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={this.getOtp.bind(this)}
					>
					<Text
					style={{color:'#fff',textAlign:'right',marginRight:25,fontSize:16,color:'#86CEEB',fontWeight:'bold'}}
				>
					GET OTP
					</Text>
					</TouchableOpacity>
					</View>
					<TextInput
						keyboardType="numeric"
						value={this.state.otp}
						onChangeText={this.handleChangeText}
						placeholder={'Enter OTP'}
						placeholderTextColor="#3e4661"
						style={this.state.inputEditable == false ? [styles.inputPhoneNumber,styles.disabledTextInput] : styles.inputPhoneNumber}
						maxLength={6}
						editable={this.state.inputEditable == false ? false : true}
					/>
			</View>
			<Button
					title="Sign In"
					buttonStyle={{borderColor:'#F9BD11',borderRadius:30,width:120,marginTop:22,backgroundColor:'#F9BE10'}}
					disabledStyle={{backgroundColor:'#FCE08E'}}
					titleStyle={{color:'#242544'}}
					disabledTitleStyle={{color:'#999'}}
					disabled={this.state.buttonDisabled == true ? true : false}
					onPress={this.onSubmit.bind(this)}
			/>
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
		fontSize          : 20,
		borderWidth       : 2,
		borderColor       : '#777',
		borderRadius 			: 30,
		marginTop					: 10,
		marginBottom			: 15
	},
	disabledTextInput:{
		borderColor:'#484E6D',
		top:5
	},
	SignInButton:{
		marginTop         : 10,
		width             : width - 60,
		borderRadius 			: 30,
	}
});
