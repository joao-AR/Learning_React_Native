import React,{Component} from 'react';
import {Text, TextInput} from 'react-native';
import Estilo from '../estilo';
import { Button } from 'react-native';

export default class Mega extends Component{
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros:[]

    }

    /*constructor(props){
        super(props)
        this.alterarQtdNumero = this.alterarQtdNumero.bind(this) // 
    }*/
    alterarQtdNumero = (qtd) => {
        this.setState({qtdNumeros: +qtd}) // colocar um + na frente para transformar string em numerico
    }

    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) +1

        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    }
    gerarNumeros = () =>{
        const numeros = Array.fill(this.state.qtdNumeros).reduce(nums => [...nums, this.gerarNumerosNaoContido(nums)],[] )
        this.setState({numeros: []})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render(){
        return(
            <>
                <Text style={Estilo.txtGrade}>
                Gerador de Mega-sena 
                </Text>

                <TextInput keyboardType='numeric' style={{borderBottomColor:"#000",borderBottomWidth:1}} placeholder='Qtde de numeros' value={`${this.state.qtdNumeros}`} onChangeText={this.alterarQtdNumero}/>
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <Text>
                {this.exibirNumeros()}
                </Text>
            </>
            
 
 
            )
    }
}