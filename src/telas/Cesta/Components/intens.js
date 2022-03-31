import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native'

export default function Itens({item: {nome, imagem, valorFrutas, tituloListaFrutas}}){
    return<>
        <View style={estilos.imagensFrutas}>
            <Image source={imagem}/>
            <Text style={estilos.frutas}>{nome}</Text>
            <Text style={estilos.valorFrutas}>{valorFrutas}</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    frutas:{
        color: "#464646",
        fontFamily: "Quicksand",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        marginLeft: 50,
    },
    imagensFrutas:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
    },
    valorFrutas:{
        color: "#464646",
        fontFamily: "Quicksand",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        marginLeft: 'auto',
        paddingHorizontal: 16,
    },
})