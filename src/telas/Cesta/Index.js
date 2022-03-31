import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Topo from './Components/Topo'
import Detalhes from './Components/Detalhes'
import Itens from './Components/intens'

export function Cesta({topo, detalhes, itens}) {
  return <>
    <FlatList
      data={itens.listaItens}
      renderItem={Itens}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={() => {
        return<>
          <Topo {...topo}/>
          <View style={estilos.view}>
            <Detalhes {...detalhes}/>
            <Text style={estilos.tituloListaFrutas}>{itens.tituloItens}</Text>
          </View>
        </>
      }}
    />
  </>
}
const estilos = StyleSheet.create({
  view: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tituloListaFrutas:{
    fontFamily: 'Lobster',
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 30,
    textAlign: 'center',
},
})