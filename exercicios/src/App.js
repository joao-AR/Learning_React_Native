import React from 'react'; // Usado para permitir o uso de trechos de jsx
import { View, Text,StyleSheet } from 'react-native';

import CompPadrao,{Comp1,Comp2} from './components/Multi' // X = componete importado com padrão 
import Primeiro from './components/Primeiro.js'
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
export default () => {
  return( 
    <View style={style.App}>
    <Aleatorio min={10} max={60}/>
    {/* <MinMax min={3} max={20}/>
      <MinMax min="1" max="94"/>
      <Text>{1+1}</Text>
      <CompPadrao/>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Primeiro/>*/} 
    </View>);
}

const style = StyleSheet.create({

  App:{
    flexGrow: 1,
    justifyContent: "center",
    alignItems:"center",
    padding:20
  }

})