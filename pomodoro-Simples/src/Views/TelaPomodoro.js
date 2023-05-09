import React,{Component} from 'react';
import { View } from "react-native";
import Cronometro from '../Components/Cronometro';

export default class TelaPomodoro extends Component {
    render(props){
        return(
                <View styles={{flex: 1,}}>
                    <Cronometro  workTime={this.props.workTime}/> 
                </View>
        )
    }
}
