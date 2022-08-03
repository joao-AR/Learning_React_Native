import React from 'react'; // Usado para permitir o uso de trechos de jsx
import { View, Text,StyleSheet, SafeAreaView } from 'react-native';

import CompPadrao,{Comp1,Comp2} from './components/Multi' // X = componete importado com padrão 
import Primeiro from './components/Primeiro.js'//Aula 18
import MinMax from './components/MinMax';//Aula 26
import Aleatorio from './components/Aleatorio';//Aula 27
import Fragment from './components/Fragment';//Aula 28
import Botao from './components/Botao';//Aula 29
import Contador from './components/Contador';//Aula 30
import Pai from './components/comunicacao_indireta/Pai';//Aula 32
import ContadorV2 from './components/contadorV2/ContadorV2';//Aula 33
import Diferenciar from './components/Diferenciar';// Aula 35
import ParImpar from './components/ParImpar';// Aula 37
import Familia from './components/Relacao/Familia';//Aula 38
import Membro from './components/Relacao/Membro';// Aula 38
import UsuarioLogado from './components/UsuarioLogado';// Aula 39
import ListaProdutos from './components/Produtos/ListaProdutos';//Aula 40
import ListaProdutosV2 from './components/Produtos/ListaProdutosV2';//Aula 41
import DigiteSeuNome from './components/DigiteSeuNome';// Aula 42 Componentes controlados
import FlexBoxV1 from './components/layout/FlexBoxV1';//Aula 46
import FlexBoxV2 from './components/layout/FlexBoxV2';// Aula 47
import Mega from './components/mega-sena/Mega';// Aula 50 Método render


export default () => {
  return(
    <SafeAreaView style={style.App}>
    <Mega qtdNumeros={12}></Mega>
    {/*
    <FlexBoxV2/>
    <DigiteSeuNome/>
    <ListaProdutosV2/>
    <ListaProdutos/>
    <UsuarioLogado usuario={{nome:'joao', email:'joao@email.com'}}/>
    <UsuarioLogado usuario={{nome:'ana', email:''}}/>
    <UsuarioLogado usuario={{nome:'', email:'pedro@email.com'}}/>
    <Familia>
      <Membro nome="ana" sobrenome="Silva"/>
      <Membro nome="Julia" sobrenome="Silva"/>
    </Familia>

    <Familia>
      <Membro nome="maria" sobrenome="cardoso"/>
      <Membro nome="rebeca" sobrenome="cardoso"/>
    </Familia>
    <ParImpar num={3}/>
    <Diferenciar/>
    <ContadorV2/>
      <Pai/>
      <Contador  inicial={100}/>
      <Botao/>
      <Aleatorio min={10} max={60}/>
      <Fragment principal="Cadastro praduto" secundario="Tela de cadastro de produto"/>
      <MinMax min={3} max={20}/>
      <MinMax min="1" max="94"/>
      <Text>{1+1}</Text>
      <CompPadrao/>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Primeiro/>*/} 
      </SafeAreaView>);
}

const style = StyleSheet.create({

  App:{
    flexGrow: 1,
    justifyContent: "center",
    alignItems:"center",
    padding:20
  }

})