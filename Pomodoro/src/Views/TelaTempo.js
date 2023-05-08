// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({navigation}) => {
    const [workTime, setWorkTime] = useState('');

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Digite abaixo o tempo de estudo:</Text>
                {/*Input to get the value from the user*/}
                <TextInput
                    value={workTime}
                    keyboardType="numeric"
                    onChangeText={(workTime) => setWorkTime(workTime)}
                    placeholder="Ex: 30 (em minutos)"
                    style={styles.inputStyle}
                />
                {/* On click of the button we will send the data as a Json
                From here to the Second Screen using navigation */}
                <Button
                    title="Começar"
                    onPress={() =>
                        navigation.navigate('TelaCronometro', {
                        workTime: workTime,
                        })
                    }
                />
            </View>

        </SafeAreaView>
    );
};

export default FirstPage;

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
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
    },
});