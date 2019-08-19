import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
  	Image,
	ScrollView,
	TextInput,
	Alert,
	Linking
} from 'react-native';
import {
	Card,
	ListItem,
	Button,
	Divider,
	Badge
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get('window').width;

export default class UserProfile extends Component {
	static navigationOptions = {
			header: null,
			};
	constructor(props) {
		super(props);
			this.state={
					editable  : false,
					type      : ''
			}
	}
editClick(type) {
	console.log(type)
	this.setState({ editable: true})
	this.setState({ type: type});
}
saveClick(type){
	this.setState({ editable: false});
	this.setState({ type: type});
}
handleBack = () =>{
	this.props.navigation.navigate('CallHistory');
}
	render() {
		return (
			<View style={styles.container}>
			<ScrollView>
          <Card>
					<View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
					<Image style={{width:125, height:125,borderRadius: 75}}
					source={
						this.props.navigation.state.params == 'Own' ?
						require('../assets/imagesfolder/profile_user.jpg') :
						require('../assets/imagesfolder/christopher.jpg')}/>
								<View style={{marginLeft:25}}>
              	<Text style={{fontWeight:'bold',fontSize:18,color:'#256DB1'}} allowFontScaling={false}>Christopher Nolan</Text>
								<Text style={{color:'#0B8FB7', fontSize:18,textAlign:'center'}} allowFontScaling={false}>Treasurer</Text>
								<View style={{marginTop:10,justifyContent:'center'}}>
								<Badge
								value={<Text allowFontScaling={false} style={{color:'#fff',fontSize:12}}>Secunderabad - 0443</Text>}
								status="warning"
								badgeStyle={{marginRight: 5,padding:5}} />
								</View>
								</View>
					</View>
          </Card>
      <View>
          <Card title={
		  <View >
			  <Text allowFontScaling={false} style={{fontWeight:'bold',fontSize:16,color:'#0B8FB7'}}>CONTACTS</Text>
			  <Divider style={{ marginTop: 10, marginBottom: 10 }}/></View>} titleStyle={{textAlign:'left'}}>
          <ListItem
				title="Phone Number"
				titleStyle={{color:'#999',marginLeft:-15,marginTop:-20}}
				titleProps={{allowFontScaling:false}}
				subtitle="+91 7731084589"
				subtitleStyle={{color:'#333',marginLeft:-15}}
				subtitleProps={{allowFontScaling:false}}
				rightIcon={ this.props.navigation.state.params == 'Own' ? null :
				<View style={{flexDirection:'row'}}>
				<MaterialIcon
						name='message'
						style={{fontSize:18,marginRight:10,color:'#3DD94A'}}
						onPress={()=>{Linking.openURL('sms:8801345132')}}
			/>
				<MaterialIcon
						name='call'
						style={{fontSize:18,color:'#008000'}}
						onPress={()=>{Linking.openURL('tel:8801345132')}}
				/>
		</View>
		}
          />
          <Divider  />

					<ListItem
						title="Email Id"
						titleStyle={{color:'#999',marginLeft:-15}}
						titleProps={{allowFontScaling:false}}
						subtitle={this.state.editable == true && this.state.type == 'email' ?  (<TextInput
								keyboardType="numeric"
								placeholder={'velugotimanoja@gmail.com'}
								placeholderTextColor="#333"
								maxLength={10}
								style={styles.input}
							/>):
						"velugotimanoja@gmail.com"}
						subtitleStyle={{color:'#333',marginLeft:-15}}
						subtitleProps={{allowFontScaling:false}}
						rightIcon={ this.props.navigation.state.params == 'Own' && (this.state.editable == true && this.state.type == 'email' ?
									(<Icon
										name='save'
										onPress={this.saveClick.bind(this,'email')}
										style={{fontSize:18,marginTop:18}}
									/>) :(<Icon
										name='edit'
										onPress={this.editClick.bind(this,'email')}
										style={{fontSize:18,marginTop:8}}
									/>)
								)
								}
					/>
          <Divider  />
          </Card>
      </View>
      <View>
          <Card title={
			   <View>
			   <Text allowFontScaling={false} style={{fontWeight:'bold',fontSize:16,color:'#0B8FB7'}}>SOCIAL</Text>
			   <Divider style={{ marginTop: 10, marginBottom: 10 }}/></View>
		  }
		  titleStyle={{textAlign:'left'}} titleProps={{allowFontScaling:false}}>
					<ListItem
						title="Facebook"
						titleStyle={{color:'#999',marginLeft:-15,marginTop:-20}}
						titleProps={{allowFontScaling:false}}
						subtitle={this.state.editable == true && this.state.type == 'facebook' ?  (<TextInput
								keyboardType="numeric"
								placeholder={'https://www.facebook.com/Christopher.com'}
								placeholderTextColor="#333"
								maxLength={10}
								style={styles.input}
							/>):
						"https://www.facebook.com/Christopher.com"}
						subtitleStyle={{color:'#333',marginLeft:-15}}
						subtitleProps={{allowFontScaling:false}}
						rightIcon={ this.props.navigation.state.params == 'Own' && (this.state.editable == true  && this.state.type == 'facebook' ?
										(<Icon
											name='save'
											onPress={this.saveClick.bind(this,'facebook')}
											style={{fontSize:18}}
										/>) :(<Icon
											name='edit'
											onPress={this.editClick.bind(this,'facebook')}
											style={{fontSize:18}}
										/>)
									)
								}
					/>
					<Divider  />
					<ListItem
						title="Twitter"
						titleStyle={{color:'#999',marginLeft:-15}}
						titleProps={{allowFontScaling:false}}
						subtitle={this.state.editable == true && this.state.type == 'twitter' ?  (<TextInput
								keyboardType="numeric"
								placeholder={'https://twitter.com/Christopher.com'}
								placeholderTextColor="#333"
								maxLength={10}
								style={styles.input}
							/>):
						"https://www.twitter.com/Christopher.com"}
						subtitleStyle={{color:'#333',marginLeft:-15}}
						subtitleProps={{allowFontScaling:false}}
						rightIcon={ this.props.navigation.state.params == 'Own' && (this.state.editable == true && this.state.type == 'twitter' ?
									(<Icon
										name='save'
										onPress={this.saveClick.bind(this,'twitter')}
										style={{fontSize:18,marginTop:18}}
									/>) :(<Icon
										name='edit'
										onPress={this.editClick.bind(this,'twitter')}
										style={{fontSize:18,marginTop:8}}
									/>)
								)
								}
					/>
					<Divider  />
          </Card>
      </View>
			<View style={{alignItems:'flex-end',marginTop:10,marginRight:10,marginBottom:10}}>
			<Button
				title="Back"
				buttonStyle={{borderColor:'#0B8FB7',borderRadius:30,width:100,backgroundColor:'#0B8FB7'}}
				titleStyle={{color:'#fff'}}
				titleProps={{allowFontScaling:false}}
				onPress={this.handleBack}
			/>
			</View>
			</ScrollView>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  container : {
		flex       : 1
	},
	input : {
		paddingVertical   : 0,
		zIndex            : -1,
		width             : width - 100,
		height            : 26,
		borderWidth       : 2,
		borderColor       : '#777',
		borderRadius 			: 5,
		marginLeft				:-18,
		marginTop					: 5,
		paddingLeft				: 5,
	},
});
