/* eslint-disable react/style-prop-object */
import { StatusBar, SafeAreaView, View } from 'react-native'
import React from 'react'
import { Cesta } from './src/telas/Cesta/Index'
import { useFonts, Hurricane_400Regular } from '@expo-google-fonts/hurricane'
import { Inter_700Bold } from '@expo-google-fonts/inter'
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand'
import mocks from './src/mocks/cesta'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [Fontes] = useFonts({
    "Hurricane": Hurricane_400Regular,
    "Inter": Inter_700Bold,
    "Quicksand": Quicksand_500Medium,
  })

  if(!Fontes){
    return <AppLoading/>
  }
  
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Cesta {...mocks} /*<-- é igual a topo={mocks.topo} detalhes={mocks.detalhes}*//>
    </SafeAreaView>
  )
}

