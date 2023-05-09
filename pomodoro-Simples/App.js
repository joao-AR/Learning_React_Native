import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPomodoro from './src/Views/TelaPomodoro';
import TelaDetalhes from './src/Views/TelaDetalhes';
import TelaTempo from './src/Views/TelaTempo';
const Tab = createBottomTabNavigator();

const TempoStack = createNativeStackNavigator();

export default class App extends Component{
  mudarTempo = (tempo) => { 
    this.setState({workTime:tempo})
  }

  TempoStackScreen = (props) => {
    return (
        <TempoStack.Navigator>
          <TempoStack.Screen name="Tempo">
            {() => <TelaTempo mudarTempo={this.mudarTempo} {...props}/>}
            {/* passando {...props} para pode usar o navigate para ir para a tela de duvidas */}
          </TempoStack.Screen>     
          <TempoStack.Screen name="Duvidas" component={TelaDetalhes} />
        </TempoStack.Navigator>
      );
  }
  state={
    workTime:10
  }

  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'blue',
          showLabel: true

      }}>
          <Tab.Screen name="Tempo" component={this.TempoStackScreen}/>
          <Tab.Screen name="Pomodoro">
            {() => <TelaPomodoro workTime={this.state.workTime}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}