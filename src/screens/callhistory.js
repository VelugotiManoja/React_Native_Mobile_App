import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  Platform,
  Animated,
  FlatList,
  UIManager,
  LayoutAnimation,
  Dimensions,
  Switch
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import CallLogs from 'react-native-call-log';
import HeaderComponent from '../components/HeaderComponent';
import MemberItem from '../components/MemberItem';
import { Card, ListItem, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewIcon from 'react-native-vector-icons/MaterialIcons';
import BottomIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const width = Dimensions.get('window').width;



class CallHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rotaryArr:[
            {
              name:'Christopher Nolan',
    					phoneNumber: 8801345132
            },
            {
              name:'Martin Scorsese',
    					phoneNumber: 9133419636
            }
          ],
          callLogsArr:[],
          expandedCard: false,
          favoriteIconClicked: false,
          switchValue: false
        }
    }

    async componentDidMount() {
      if (Platform.OS === 'android') {
      await this.requestPhoneStatePermission();
      await this.requestCallLogsPermission();
      } else {
        alert('IOS Device found');
      }
    }

    async requestPhoneStatePermission() {
      try {
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        {
        title: 'DialerApp Permission',
        message: 'DialerApp needs access to your Phone State',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
        },
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         console.log('granted');
        } else {
         console.log('permission denied');
        }
      return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
      }
    }


   async requestCallLogsPermission() {
        let callLogsList;
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'DialerApp Permission',
            message: 'DialerApp needs access to your Call History',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          callLogsList = await CallLogs.load(20);
        } else {
          console.log('permission denied');
        }
      this.setState({callLogsArr:callLogsList})
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    renderCallHistoryList() {
      const {callLogsArr, rotaryArr, switchValue}=this.state;
      let memberItemsArr = switchValue ? rotaryArr : callLogsArr;
      return memberItemsArr && memberItemsArr.map((item,key) => {
        return (
          <MemberItem
            key={key}
            navigationProps={this.props.navigation}
            data={item} />
        )
      })

    }

    onSwitchValueChange = (value) => {
      this.setState({
        switchValue: !this.state.switchValue
      })
    }

    render() {
        return (
          <ScrollView style={styles.container}>
        {/* <HeaderComponent
          onSwitchValueChange={this.onSwitchValueChange}
          switchValue={this.state.switchValue}
          headerProps={this.props.navigation}
          screenProps={this.props.screenProps}
          showSwitchNavigator={true}
          headerTitle='CALL HISTORY'/> */}
              {this.renderCallHistoryList()}
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container : { flex: 1 },
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
});

  export default CallHistory;
