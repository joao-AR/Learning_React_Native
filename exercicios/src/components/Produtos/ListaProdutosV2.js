import React from 'react';
import {FlatList, Text} from 'react-native';
import Estilo from '../estilo';
import Produtos from './Produtos';

export default props => {

    return(
        <>
            <Text style={Estilo.txtGrade}>Lista de Produtos V2:</Text>
            <FlatList data={Produtos}
            renderItem={({item:p})=>{
                return(
                    <Text>{p.id} {p.nome} tem R$:{p.preco}</Text>
                )
            }}
            keyExtractor={i=> `${i.id}`}
            ></FlatList>
        </>
        
    )
}