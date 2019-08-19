import React, {Component} from 'react';
import { View, Text, Switch } from 'react-native';
import * as FontSize from './FontSize';

class SwitchIconComponent extends Component {


    constructor(props){
        super(props);
        this.state={
            switchValue:false
        }
    }

    onSwitchValueChange = (value) => {
        this.setState({
          switchValue: !this.state.switchValue
        })
      }

    render() {
        return (
          <View style={{flexDirection:'row',alignItems:'center'}}>
              {this.state.switchValue ?
              <Text allowFontScaling={false} style={{color:'white', fontSize:FontSize.normalize(14)}}>All</Text> :
              <Text allowFontScaling={false} style={{color:'white', fontSize:FontSize.normalize(14)}}>Members</Text>
              }
              <Switch
                trackColor={{false:'#008590', true: '#008590'}}
                thumbColor={this.state.switchValue? '#white': 'white'}
                onValueChange={this.onSwitchValueChange}
                value={this.state.switchValue} />
          </View>
        )
    }
}


export default SwitchIconComponent;
