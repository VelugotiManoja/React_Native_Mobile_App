import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const InputComponent = (props) => {
    return (
        <View>
        <TextInput
          keyboardType="numeric"
          placeholder={'Phone Number'}
          placeholderTextColor="#888"
          maxLength={10}
        />
        </View>
    )
}

export default InputComponent;
