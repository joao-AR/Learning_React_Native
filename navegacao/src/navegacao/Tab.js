import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../Views/TelaA";
import TelaB from "../Views/TelaB";
import TelaC from "../Views/TelaC";
const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true,
            // labelStyle: { fontSize: 30 }
        }} initialRouteName="TelaB">
            
        <Tab.Screen name="TelaA" component={TelaA}/>
        <Tab.Screen name="TelaB" component={TelaB}/>
        <Tab.Screen name="TelaC" component={TelaC}/>
    </Tab.Navigator>
)