import React from 'react';
import {Platform, Text} from 'react-native';
import Estilo from './estilo';

export default props => {
    if(Platform.OS === 'android'){
        return <Text style={Estilo.txtGrade}>android</Text>
    }else if(Platform.OS === 'ios'){
        return <Text style={Estilo.txtGrade}>IOS</Text>
    }else{
        return <Text style={Estilo.txtGrade}>{Platform.OS}</Text>
    }

}