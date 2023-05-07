import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaTempo from "../Views/TelaTempo";
import TelaCronometro from '../Views/TelaCronometro'
import PassoStack from "./PassoStack";


const Stack = createNativeStackNavigator()


export default props => (
    <Stack.Navigator initialRouteName="TelaTempo"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="TelaTempo"
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="TelaCronometro">
                    <TelaTempo />
                </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen name="TelaCronometro"
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="TelaTempo">
                    <TelaCronometro />
                </PassoStack>
            )}
        </Stack.Screen>

    </Stack.Navigator>
)