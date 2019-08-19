import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  UIManager,
  LayoutAnimation,
  Dimensions,
  Linking
} from 'react-native';
import * as FontSize from './FontSize';
import { Card, ListItem, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const width = Dimensions.get('window').width;



class MemberItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          expandedCard: false,
          favoriteIconClicked: false,
        },
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }



    _onExpandClick(item) {
      console.log(item)
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
        expandedCard: !this.state.expandedCard,
        selectedItem:item,
      })
    }

    _onFavoriteIconClick = () => {
      this.setState({
        favoriteIconClicked:!this.state.favoriteIconClicked
      })
    }

    renderMemberItems() {
      const {expandedCard, selectedItem}=this.state;
      const {data}=this.props;
      let myText = data && data.name && (data.name).length;
      let stringText;
      if(myText && myText>10) {
        stringText = data.name.substring(0, 12) + '...';
      } else {
        stringText = data.name;
      }
      return (
        <View style={{marginTop:2}}>
        {expandedCard && data==selectedItem ?
          <Card containerStyle={styles.cardContainer}>
            <TouchableOpacity
                onPress={this._onExpandClick.bind(this, data)}>
            <View style={styles.flexView}>

              <View style={{flexDirection:'row',alignItems:'center',flex:0.7}}>
              <Image style={styles.image} source={require('../assets/imagesfolder/christopher.jpg')}/>
              <View>
                <Text style={styles.title} allowFontScaling={false}>{data && (stringText || data.phoneNumber)}</Text>
                <Text style={styles.subTitle} allowFontScaling={false}>
                <Text style={{marginLeft:10}} allowFontScaling={false}>President,</Text>
                <Text style={{marginLeft:10}} allowFontScaling={false}>Hyderabad-2789</Text></Text>
              </View>
              </View>

              <View style={{flexDirection:'row',alignItems:'center', flex:0.3, justifyContent:'space-around',marginRight:-14}}>
              <Text allowFontScaling={false}>11:22AM</Text>
              <View>
                <Icon name='phone' color='#008000'  size={24} onPress={()=>{Linking.openURL('tel:'+ data.phoneNumber)}}/>
              </View>
              </View>

            </View>
            </TouchableOpacity>
            <Divider style={styles.divider} />
            <Animatable.View>
                  <View style={styles.iconView}>
                      <NewIcon name='favorite' size={24}
                          color={this.state.favoriteIconClicked ? '#f62459' : '#A9A9A9'}
                          onPress={this._onFavoriteIconClick}
                      />
                      <NewIcon name='message' color='#3DD94A' size={24} onPress={()=>{Linking.openURL('sms:'+ data.phoneNumber)}}/>
                      <Icon name='user' color='#41C4FF' size={24}
                      onPress={() => this.props.navigationProps.navigate('UserProfile','Other')}/>
                  </View>
              </Animatable.View>
          </Card> :
          <TouchableOpacity
          onPress={this._onExpandClick.bind(this, data)}>
          <ListItem
              title={stringText || data.phoneNumber}
              leftAvatar={{ rounded: true, source: require('../assets/imagesfolder/christopher.jpg') }}
              titleStyle={{fontSize:FontSize.normalize(16)}}
              titleProps={{allowFontScaling:false}}
              subtitle='President,Hyderabad-2789'
              subtitleStyle={{color:'#808080',fontSize:FontSize.normalize(12)}}
              subtitleProps={{allowFontScaling:false}}
              rightSubtitle='11:22AM'
              rightIcon={
                  <Icon name='phone' color='#008000' size={24} marginLeft={18} onPress={()=>{Linking.openURL('tel:'+ data.phoneNumber)}}/>
              }
              rightSubtitleStyle={{color:'black'}}
              rightSubtitleProps={{allowFontScaling:false}}
          />
          </TouchableOpacity>}
          </View>
      )
    }



    render() {
        return (
          <View style={styles.container}>
              {this.props.data && this.renderMemberItems()}
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container : { flex: 1 },
  cardContainer: {
    width:width-10,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    marginTop:0
  },
  containerView: {
    marginLeft:'1%',
    marginRight:'1%',
    width:'98%',
    borderBottomColor: 'black'
    },
    iconView: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
    },
    flexView:{flexDirection:'row', alignItems:'center'},
    divider:{
      backgroundColor: '#cecece',
      margin:10,
      shadowOffset:{  width: 1,  height: 1 },
      shadowOpacity: 1.0,
    },
    image:{width:40,height:40, borderRadius:20,marginLeft:-5},
    title:{fontSize:FontSize.normalize(16),marginLeft:width*0.044},
    subTitle:{marginLeft:width*0.044, color:'#808080',fontSize:FontSize.normalize(12)},
});

  export default MemberItem;
