import React from "react";
import {SafeAreaView,Text} from 'react-native'
import TextoCentral from "./Components/TextoCentral";
import TelaA from "./Views/TelaA";
import TelaB from "./Views/TelaB";
export default props => (
    <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <TelaA></TelaA>
        <TelaB></TelaB>
        <TelaC></TelaC>
    </SafeAreaView>
)