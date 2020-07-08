import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import PokemonList from './screens/PokemonList'
import PokemonDetail from './screens/PokemonDetail'
import themes from './lib/themes'

const Routes = StackNavigator({
  Home: {
    screen: PokemonList,
    navigationOptions: {
      title: 'Pokedexsssss',
      headerStyle: {
        backgroundColor: themes.app.primary
      },
      headerTintColor: themes.app.text
    }
  },
  Detail: {
    screen: PokemonDetail,
    navigationOptions: ({ navigation: { state: { params }}}) => ({
      title: params.pokemon.name,
      headerStyle: {
        backgroundColor: themes[params.pokemon.types[0]].primary,
      },
      headerTintColor: themes[params.pokemon.types[0]].text
    })
  }
})

export default Routes;