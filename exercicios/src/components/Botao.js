import React from 'react'; // Usado para permitir o uso de trechos de jsx
import {Button } from 'react-native';


export default props => {

    function executar (){
        console.warn('executar #01')
    }
    return(
        <>
            <Button title="Executar #01" onPress={executar} />
            <Button title="Executar #02" onPress={function(){
                console.warn("Executar #02")
            }} />
            <Button title="Executar #03" onPress={()=> console.warn("Executar #03")} />
        </>

    )
}