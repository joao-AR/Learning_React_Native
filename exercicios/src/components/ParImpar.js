import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilo';

export default ({num = 0}) => {

    return(
        <View>
            <Text style={Estilo.txtGrade}>O Resultado é:</Text>
            {num%2 === 0 ? <Text style={Estilo.txtGrade}>Par</Text> : <Text style={Estilo.txtGrade}>Impar</Text>}
        </View>
        
    )
}