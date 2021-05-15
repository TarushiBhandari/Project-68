import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 200
            }}>
                <Text>Facebook Screen</Text>
            </View>
        )
    }
}