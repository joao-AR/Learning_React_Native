import React,{Component} from 'react';

import { View,Text,TextInput, Button,StyleSheet,TouchableOpacity } from "react-native";

export default class TelaTempo extends Component {
    state = {
        workTime:10
    }
    
    onChangeText = (key, value) => {this.setState({ [key]: value })}
    salvar = () =>{
        this.props.mudarTempo(this.state.workTime)
        
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:25,color:'rgba(255, 255, 255, 1)'} }>Digite a quantidade de minutos </Text>
                <TextInput
                style={styles.input}
                placeholder='minutos'
                keyboardType='numeric'
                onChangeText={val => this.onChangeText('workTime', val)}
                value={this.state.workTime}/>
                <TouchableOpacity style={ styles.button} onPress={this.salvar}>
                    <Text style={styles.text}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button} onPress={() => this.props.navigation.navigate('Duvidas')}>
                    <Text style={styles.text}>Duvidas</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
        backgroundColor: 'rgba(125, 167, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        color:'rgba(255, 255, 255, 1)',
        textAlign:'center',
        fontSize:30,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:300,
    },
    button: {
        width:200,
        alignItems: 'center',
        backgroundColor: 'rgba(181, 181, 181, 0.2)',
        padding: 10,
        marginTop:30,
        borderRadius:15,
        
    },
    text:{
        fontSize:20,
        color:'rgba(255, 255, 255, 1)'
    }
});
