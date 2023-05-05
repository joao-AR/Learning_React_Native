import React, { useState, useEffect } from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';

const Cronometro = ({ workTime, breakTime }) => {

  console.log(workTime);
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [Intervalo,setIntervalo] = useState();

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
    setMinutes(0)
    setSeconds(0)
  }

  const changeTime = () => {
    setSeconds((prevState) => {
      if (minutes === 0 && prevState === 0) {
        clearInterval(Intervalo);
        return 0;
      } else if (prevState === 0) {
        setMinutes((prev) => prev - 1);
        return 59;
      } else {
        return prevState - 1;
      }
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.display} >
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
      <View style={styles.buttons}>
          <Button title='start' onPress={start}></Button>
          <Button title='stop' onPress={stop}></Button>
          <Button title='clear' onPress={clear}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display:{
    fontSize:30
  },
  buttons:{
    fontSize:15,
    flexDirection:'row',
  }
});


export default Cronometro;