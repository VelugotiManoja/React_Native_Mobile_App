import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Linking, TouchableOpacity,ScrollView, Dimensions,Picker} from 'react-native';
import MemberItem from '../components/MemberItem';
import { Card,Divider, SearchBar } from 'react-native-elements';
import * as FontSize from '../components/FontSize';
import SearchComponent from '../components/SearchComponent';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
			itemMembers: [
				{
					name:'Girish',
					phoneNumber: 8801345132
				},
				{
					name:'Manoja',
					phoneNumber: 7731084589
				}
			],
			textInputFocus: false,
			nameSelected:true,
			clubSelected:false,
			designationSelected:false,
		},
		this.updateSearch = this.updateSearch.bind(this);

		Dimensions.addEventListener('change', (ds) => {
			this.setState({
				orientation: ds.window.height > 500 ? 'portrait' : 'landscape',
			})
		})
    }

    searchUsers = () => {
        console.log('search users');
	}

	renderSearchList() {
		const {itemMembers}=this.state;
      return itemMembers && itemMembers.map((item,key) => {
        return (
          <MemberItem
          key={key}
          data={item}
          navigationProps={this.props.navigation}/>
        )
      })
	}

	updateSearch(search) {
		this.setState({ search });
	};

	onSelectingName = () => {
		this.setState({
			nameSelected:true,
			clubSelected:false,
			designationSelected:false
		})
	}

	onSelectingClub = () => {
		this.setState({
			nameSelected:false,
			clubSelected:true,
			designationSelected:false
		})
	}

	onSelectingDesignation = () => {
		this.setState({
			nameSelected:false,
			clubSelected:false,
			designationSelected:true
		})
	}

    render() {
		const { search,nameSelected, clubSelected, designationSelected,orientation} = this.state;

        return (
            <ScrollView style={styles.container}>
					<SearchBar
						ref={search => this.searchRef = search}
						containerStyle={{
						flex:30,
						width: '100%',
						backgroundColor:'#fff',
						borderBottomColor: 'transparent',
						borderTopColor: 'transparent'}}
						inputContainerStyle={{backgroundColor:'#EEEEEE',borderWidth:0.5, borderBottomWidth:0.5}}
						placeholder={nameSelected ? 'Search by Name': clubSelected ? "Search by Club" : "Search by Designation"}
						onChangeText={this.updateSearch}
						allowFontScaling={false}
						value={search}
					/>
					<View style={{flex:10,backgroundColor:'#fff',paddingBottom:8,paddingTop:2}}>
						<View style={styles.viewContainer}>
							{/* <TouchableOpacity onPress={this.onSelectingName.bind(this)}>
								<View style={nameSelected ? styles.selectedView: styles.basicView}>
									<Text allowFontScaling={false} style={nameSelected ? styles.selectedText : styles.basicText}>Name</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={this.onSelectingClub.bind(this)}>
								<View style={clubSelected ? styles.selectedView: styles.basicView}>
									<Text allowFontScaling={false} style={clubSelected ? styles.selectedText : styles.basicText}>Club</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={this.onSelectingDesignation.bind(this)}>
							<View style={designationSelected ? styles.selectedView: styles.basicView}>
									<Text allowFontScaling={false} style={designationSelected ? styles.selectedText : styles.basicText}>Designation</Text>
							</View>
							</TouchableOpacity> */}
							<SearchComponent
								selectedText='Name'
								selected={nameSelected}
								onSelecting={this.onSelectingName} />
						   <SearchComponent
								selectedText='Club'
								selected={clubSelected}
								onSelecting={this.onSelectingClub} />
								<SearchComponent
								selectedText='Designation'
								selected={designationSelected}
								onSelecting={this.onSelectingDesignation} />
						</View>
					</View>

					<View style={{flex:60,marginTop:20}}>{this.renderSearchList()}</View>
			</ScrollView>
        )
    }
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: '#fff'
	},
	viewContainer:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-around'
	},
	portrait: {
		width:width/3.5,
		height:height/20,
	},
	landscape: {
		width:width/20,
		height:height/3.5,
	},
	selectedView:{
		width:width/3.5,
		height:height/20,
		borderWidth:0.5,
		borderRadius:2,
		borderColor:'#cecece',
		backgroundColor:'#01BED1'
	},
	basicView:{
		width:width/3.5,
		height:height/20,
		borderWidth:0.5,
		borderRadius:2,
		borderColor:'#cecece',
		backgroundColor:'#fff'
	},
	basicText:{
		textAlign:'center',
		color:'#8C8C8C',
		fontSize: FontSize.normalize(12),
		marginTop:'auto',
		marginBottom:'auto'
	},
	selectedText:{
		textAlign:'center',
		color:'#fff',
		fontSize: FontSize.normalize(12),
		marginTop:'auto',
		marginBottom:'auto'
	},
});

export default Search;
