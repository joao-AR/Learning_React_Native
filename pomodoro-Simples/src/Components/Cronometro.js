import React, { useState, useEffect } from 'react';
import { Text, View, Button,Alert,StyleSheet,TouchableOpacity } from 'react-native';

export default Cronometro = ({workTime}) => {
  const [TempoRestante, setTempoRestante] = useState({ minutos: workTime, segundos: 0 });
  const [estaRodando, setRodando] = useState(false);
  const [Intervalo, setIntervalo] = useState(null);
  const  Alerta = () => {
    Alert.alert(
      "O tempo acabou!",
      "Aproveite para descansar um pouco :) ",
      [{text:"sair"}]
    )
  }

  useEffect(() => {
    if (estaRodando) { // se o pomodoro não está pausado
      const IntervaloPomodoro = setInterval(() => {
        setTempoRestante(prevTempoRestante => {
          const novoTempoRestante = prevTempoRestante.minutos * 60 + prevTempoRestante.segundos - 1; // calcula o total de  segundo restantes
          const novominutos = Math.floor(novoTempoRestante / 60); // peaga o valor inteiro do tempo Restante / 60 ou seja a quantidade de mintutos que falta
          const novoSegundos = novoTempoRestante % 60; // pega o reto da divisão do tempo restante dividido por 60 ou seja a quantidade de segundos para a acabar o minuto atual

          if (novoTempoRestante <= 0) { // se acabar o tempo
            clearInterval(IntervaloPomodoro);
            setTempoRestante({minutos:workTime, segundos:0})
            Alerta()
            setRodando(false);
          }

          return { minutos: novominutos, segundos: novoSegundos };
        });
      }, 1000);

      setIntervalo(IntervaloPomodoro);
    }

    return () => clearInterval(Intervalo);
  }, [estaRodando]);

  const start = () => {
    setRodando(true);
  };

  const stop = () => {
    setRodando(false);
    clearInterval(Intervalo);
  };

  const formatarTempo = time => {
    return time < 10 ? `0${time}` : time;
  };

  const atualizarTempo = () => {
    setTempoRestante({minutos:workTime, segundos:0})
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:80,color:'rgba(255, 255, 255, 1)',}}>{`${formatarTempo(TempoRestante.minutos)}:${formatarTempo(TempoRestante.segundos)}`}</Text>
      
      {estaRodando ? (
        <TouchableOpacity style={styles.button} onPress={stop}>
          <Text style={styles.text}>Parar</Text>       
        </TouchableOpacity>
      ) : (
  
        <TouchableOpacity style={styles.button} onPress={start}>
          <Text style={styles.text}>começar</Text>       
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.button} onPress={atualizarTempo}>
        <Text style={styles.text}>Atulizar</Text>       
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      
      backgroundColor: 'rgba(125, 167, 255, 1)',
      alignItems: 'center',
      justifyContent: 'center',
      height:"100%"
  },
  button: {
      width:200,
      alignItems: 'center',
      backgroundColor: 'rgba(181, 181, 181, 0.2)',
      padding: 10,
      marginTop:30,
      borderRadius:15,
      
  },
  text:{
      fontSize:20,
      color:'rgba(255, 255, 255, 1)'
  },
  tempo:{
    fontSize:50,
    color:'rgba(255, 255, 255, 1)'
}
});

