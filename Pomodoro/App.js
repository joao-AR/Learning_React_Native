
import { Button, StyleSheet, Text, View } from 'react-native';
import Cronometro from './src/Components/Cronometro'
import { useState } from 'react';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Cronometro workTime={25} breakTime={5}/>
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
