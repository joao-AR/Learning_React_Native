import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const App = () => {
  const [workTime, setWorkTime] = useState(""); // Passando uma string vazia para inicializar a variável "workTime"

  const handleTextChange = (text) => {
    setWorkTime(text); // Atualizando o valor de "workTime" com o texto digitado no TextInput
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite abaixo o tempo de estudo:</Text>
      <TextInput
        placeholder="Ex: 30 (em minutos)"
        keyboardType="numeric"
        value={workTime} // Definindo o valor do TextInput como a variável "workTime"
        onChangeText={handleTextChange} // Utilizando uma função separada para atualizar o estado de "workTime"
        style={styles.input}
      />
      <Button title="Começar" onPress={() => console.log("Iniciando o estudo")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },
});

export default App;
