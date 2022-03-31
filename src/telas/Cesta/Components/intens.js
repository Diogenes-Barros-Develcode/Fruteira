import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native'

export default function Itens({tituloItens, listaItens}){
    return<>
        <Text>{tituloItens}</Text>
        {listaItens.map(({nome, imagem}) => {
            return <View key={nome}>
                <Text style={estilos.frutas}>{nome}</Text>
                <Image source={imagem}/>
            </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    frutas:{
        color: "#464646",
        fontFamily: "Quicksand",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
    },
})