import React from 'react'
import WithLoading from '../components/WithLoading'
import { View, Text } from 'react-native'

const PokemonDetail = (props) => {
  console.log('Props from Pokedetail: ', props)
  return (

  <View>
    <Text>Pokemon: </Text>
    <Text>{props.navigation.state.params.pokemon.name}</Text>
  </View>
  )

}


export default WithLoading(PokemonDetail)
