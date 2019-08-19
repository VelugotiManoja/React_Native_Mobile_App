import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Linking,Dimensions,TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import FavoritesComponent from '../components/FavoritesComponent';
import MemberItem from '../components/MemberItem';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NewIcon from 'react-native-vector-icons/MaterialIcons';

const width = Dimensions.get('window').width;

class FavoriteContacts extends React.Component {
	state={
		favoriteIconClicked	: false,
		rightArrowClicked: false,
		freqList						: [
								{name:'Girish',enable:false, image:require('../assets/imagesfolder/christopher.jpg')},
								{name:'Ravi',enable:false,image:require('../assets/imagesfolder/christopher.jpg')},
								{name:'Seshu',enable:false,image:require('../assets/imagesfolder/christopher.jpg')},
								{name:'Manoja',enable:false,image:require('../assets/imagesfolder/christopher.jpg')},
						],
		favoriteList: [
			{name:'Girish',enable:false, image:require('../assets/imagesfolder/christopher.jpg')},
								{name:'Ravi',enable:false,image:require('../assets/imagesfolder/christopher.jpg')},
								{name:'Seshu',enable:false,image:require('../assets/imagesfolder/christopher.jpg')},
								{name:'Manoja',enable:false,image:require('../assets/imagesfolder/christopher.jpg')},
								{name:'Harish',enable:false,image:require('../assets/imagesfolder/christopher.jpg')},
		]
	}
	_onFavoriteIconClick = (item, key) => {
		let enable=this.state.freqList[key].enable;
		let freqList = [ ...this.state.freqList ];
		freqList[key] = {...freqList[key], enable: !enable};
		this.setState({
			favoriteIconClicked:!this.state.favoriteIconClicked,
			selectedKey:key,
			freqList,
			selectedItem:this.state.freqList[key]
		});
		  }

		  renderFrequentList() {
			  const {freqList}=this.state;
			return freqList && freqList.map((item,key) => {
				return (
					<FavoritesComponent
						key={key}
					  selectedKey={this.state.selectedKey}
					  selectedItem={this.state.selectedKey}
					  renderItem={item}
					  renderKey={key}
					  freqList={this.state.freqList}
					  favoriteIconClicked={this.state.favoriteIconClicked}
					  _onFavoriteIconClick={this._onFavoriteIconClick}
					  />
				)
			  })
		  }

		  renderFavoriteList() {
			const {favoriteList}=this.state;
			return favoriteList && favoriteList.map((item,key) => {
			  return (
				<MemberItem
					key={key}
				  navigationProps={this.props.navigation}
				  data={item} />
			  )
			})
		  }

		  leftArrow = () => {
			  console.log(this.state.scrollViewWidth)
			eachItemOffset = this.state.scrollViewWidth / 2;
			console.log(eachItemOffset);
			_currentXOffset =  this.state.currentXOffset - eachItemOffset;
			this.refs.scrollView.scrollTo({x: _currentXOffset, y: 0, animated: true})
			this.setState({
				rightArrowClicked: !this.state.rightArrowClicked
			})
		  }

		  rightArrow = () => {
			console.log(this.state.scrollViewWidth)
			eachItemOffset = this.state.scrollViewWidth * 2;
			console.log(eachItemOffset);
			this.refs.scrollView.scrollTo({x: eachItemOffset, y: 0, animated: true})
			this.setState({
				rightArrowClicked: !this.state.rightArrowClicked
			})
		  }

		  _handleScroll = (event) => {
			newXOffset = event.nativeEvent.contentOffset.x
			this.setState({currentXOffset:newXOffset})
		  }

	render() {
		return (
			<ScrollView style={styles.container}>
					<View style={{flex:20}}>
						<Text allowFontScaling={false} style={styles.textStyle}>FREQUENTS</Text>
					<View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
					{this.state.rightArrowClicked &&
					<TouchableOpacity
						style={{alignItems: 'flex-start'}}
						onPress={this.leftArrow}>
					  <Icon name='angle-left' type='font-awesome' color='#517fa4' size={36}/>
					</TouchableOpacity>}
					<ScrollView horizontal={true}
					ref="scrollView"
					decelerationRate={0}
					snapToInterval={width - 60}
					contentOffset={{x:10,y:10}}
					showsHorizontalScrollIndicator={false}
					onContentSizeChange={(w, h) => {
						this.setState({
							scrollViewWidth:w
						})}}
					onScroll={this._handleScroll}
					snapToAlignment={"end"}>
					{this.renderFrequentList()}
					</ScrollView>
					{!this.state.rightArrowClicked &&
					<TouchableOpacity
						style={{alignItems: 'flex-end'}}
						onPress={this.rightArrow}>
					  <Icon name='angle-right' type='font-awesome' color='#517fa4' size={36}/>
					</TouchableOpacity>}
					</View>
					</View>
					<View style={{flex:80,marginTop:20}}>
					<Text allowFontScaling={false} style={styles.textStyle}>FAVORITES</Text>
					{this.renderFavoriteList()}
					</View>
			</ScrollView>
		);
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
		width:100,
		height:100,
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
	}
});
export default FavoriteContacts;
