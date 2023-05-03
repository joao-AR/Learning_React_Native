
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import {createMineBoard} from './src/gameLogic'
import { Component } from 'react';

export default class App extends Component {
  
  constructor (props){
    super(props)
    this.state = this.createState()
  }
    minesAmount = () =>{
    const cols = params.getColumnAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () =>{
    const cols = params.getColumnAmount()
    const rows = params.getRowsAmount()
    return {
      board : createMineBoard(rows,cols, this.minesAmount())
    }
  }
  
  render(){
    return (
      <View style={styles.container}>
          <Text> Iniciando o campo minado2 </Text>
          <Text>Tamanho da grade {params.getRowsAmount()} X {params.getColumnAmount()}</Text>

          <View style={styles.container}>
            <MineField board={this.state.board}></MineField>
          </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
   
    justifyContent: 'flex-end',
  },
  board:{
    alignItems:'center',
    backgroundColor:'#AAA'
  }
});
