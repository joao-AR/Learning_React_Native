import React from "react";
import { View,Text } from "react-native";

export default props => (

    <View>
        <Text>Tempo de trabalho {props.workTime} Tempo de pausa {props.breakTime} </Text>
        
    </View>
)