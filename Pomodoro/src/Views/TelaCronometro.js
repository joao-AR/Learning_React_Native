import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Cronometro from '../Components/Cronometro'

const SecondPage = ({route}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Tempo de estudo  {route.params.workTime}</Text>
                <Cronometro workTime={route.params.workTime} breakTime={5}/>
            </View>
        </SafeAreaView>
    );
};

export default SecondPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
});