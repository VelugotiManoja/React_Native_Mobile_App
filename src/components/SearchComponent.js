import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as FontSize from './FontSize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const SearchComponent = ({selectedText,onSelecting, selected}) => {
    return (
        <TouchableOpacity onPress={onSelecting}>
            <View style={selected ? styles.selectedView: styles.basicView}>
                <Text allowFontScaling={false} style={selected ? styles.selectedText : styles.basicText}>{selectedText}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default SearchComponent;
