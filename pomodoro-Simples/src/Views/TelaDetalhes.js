import React from "react";
import { View,Text,StyleSheet} from "react-native";

export default function TelaDetalhes() {
    return (
        <View style={styles.container}>
            <View style={{marginBottom:40}}>
                <Text style={styles.textoPrincipal}>Oque é Pomodoro ?</Text>
                <Text style={styles.textoSecundario}>O método Pomodoro é uma técnica de gerenciamento de tempo criada por Francesco Cirillo que consiste em dividir o tempo em períodos de trabalho e descanso. Cada período de trabalho dura geralmente 25 minutos, seguido por um intervalo de descanso curto. Após quatro ciclos completos, um intervalo de descanso mais longo é permitido. A técnica visa aumentar a eficiência e a concentração durante o tempo de trabalho, enquanto reduz o cansaço e o estresse.</Text>
            </View>
            <View>
                <Text style={styles.textoPrincipal}>Tempo de estudo:</Text>
                <Text style={styles.textoSecundario}>Na tela tempo digite a quantidade de tempo desejado para estudar(em minutos) e clique no botão salvar.</Text>
                <Text style={styles.textoSecundario}>No bottom-tab ir para Pomodoro (caso o valor digitado não estiver no pomodoro, clique no botão atualizar)</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor: 'rgba(125, 167, 255, 1)',
        alignItems: 'center',
        height:"100%"
    },
    textoPrincipal:{
        fontSize:30,
        color:'rgba(255, 255, 255, 1)'
    },
    textoSecundario:{
        fontSize:17,
        color:'rgba(255, 255, 255, 1)'
    }
});
