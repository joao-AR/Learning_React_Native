
import { Button, StyleSheet, Text, View } from 'react-native';
import Cronometro from './src/Components/Cronometro'
import { useState } from 'react';

export default function App() {
  
  const [segundos,SetSegundos] = useState(0)
  const [Minutos,SetMinutos] = useState(25)
  const [Intervalo,setIntervalo] = useState()
  
  const start  = () => {
    setIntervalo(
      setInterval(() => {
        changeTime()
      }, 1000)
    )
    
  }

  const stop = () => {
    if(Intervalo){
      clearInterval(Intervalo)
    }
  }

  const clear = () => {
    stop();
    SetMinutos(0)
    SetSegundos(0)
  }

  const changeTime = () => {
    SetSegundos((prevState) => {
      if (Minutos === 0 && prevState === 0) {
        clearInterval(Intervalo);
        return 0;
      } else if (prevState === 0) {
        SetMinutos((prev) => prev - 1);
        return 59;
      } else {
        return prevState - 1;
      }
    });
  };
  return (
    <View style={styles.container}>
      <Cronometro workTime={25} breakTime={5}/>
      <Text>
        {Minutos < 10 ? '0'+ Minutos : Minutos}:{segundos < 10 ? '0'+ segundos : segundos}
      </Text>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Button title='start' onPress={start}></Button>
        <Button title='stop' onPress={stop}></Button>
        <Button title='clear' onPress={clear}></Button>
      </View>
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
});
