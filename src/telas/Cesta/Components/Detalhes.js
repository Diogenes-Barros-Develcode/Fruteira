import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Detalhes({tituloSecundario, nomeFazenda, descricao, preco, logoJennyJackFarm, botao }){
    return <>
    <Text style={estilos.tituloSecundario}>{tituloSecundario}</Text>
    <View style={estilos.mesmaLinha}>
     <Image source={logoJennyJackFarm} style={estilos.imagemLogo}/>
     <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
    </View>
    <Text style={estilos.descricao}>{descricao}</Text>
    <Text style={estilos.preco}>{preco}</Text>
    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
      <Text style={estilos.textoBotao}>{botao}</Text>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    tituloSecundario: {
        width: '100%',
        fontSize: 50,
        textAlign: 'center',
        paddingTop: 30,
        lineHeight: 42,
        color: '#464646',
        fontFamily: "Hurricane",
      },
      mesmaLinha: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
      },
      imagemLogo: {
        width: 70,
        height: 70,
        marginLeft: 15,
      },
      nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        color: 'black',
        marginLeft: 35,
        fontFamily: 'Inter',
      },
      descricao: {
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        width: '100%',
        color: 'black',
        fontFamily: 'Quicksand',
      },
      preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        width: '100%',
        textAlign: 'center',
      },
      botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
      },
      textoBotao: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 26,
        fontFamily: "Quicksand",
      },
})