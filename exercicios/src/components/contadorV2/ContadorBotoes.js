import React from 'react';
import {View,Button,StyleSheet} from 'react-native';


export default props => {

    return(
        <View style={style.Botoes}>
            <Button title="-" onPress={props.dec}></Button>
            <Button title="+" onPress={props.inc}></Button>
            
        </View>
    )
}

const style = StyleSheet.create({
    Botoes:{
        flexDirection:"row",
        margin:5,
        height:50,
        width:50,
    }
})