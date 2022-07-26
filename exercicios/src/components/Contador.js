import React, {useState} from 'react'; 
import {Button,Text } from 'react-native';
import Estilo from './estilo';

export default props => {
    const [numero,setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return(
        <>
            <Button title="+" onPress={inc}></Button>
            <Text style={Estilo.txtGrade}>{numero}</Text>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}
