

import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TelaCronometro from '../Views/TelaCronometro';
import TelaTempo from '../Views/TelaTempo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <View style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="TelaTempo">
                    <Stack.Screen
                    name="TelaTempo"
                    component={TelaTempo}
                    options={{
                        title: 'First Page', //Set Header Title
                        headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                        },
                    }}
                    />
                    <Stack.Screen
                    name="TelaCronometro"
                    component={TelaCronometro}
                    options={{
                        title: 'Second Page', //Set Header Title
                        headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                        },
                    }}
                    />
                </Stack.Navigator>
            
            </NavigationContainer>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Tempo" component={TelaTempo}></Tab.Screen>
                    <Tab.Screen name="Pomodoro" component={TelaCronometro}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default App;