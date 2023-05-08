
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Cronometro from '../Components/Cronometro'
import { useState } from 'react';

export default props => {
    console.log(props.route.params)
    const route = props.route || {params:{numero:0}}
    return (
    <View style={styles.container}>
        <Text>Tempo work : {route.params.numero} </Text>
        <Cronometro workTime={route.params.numero} breakTime={5}/>
        {/* <TextInput placeholder='Digite o tempo'  keyboardType='numeric' onChangeText={workTime => setWorkTime(workTime)}  style={styles.input}/> */}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    input:{
    alignItems:'center',
    justifyContent:'center',
    height:50,
    width:100,
    borderColor:"#000"
    }
});
