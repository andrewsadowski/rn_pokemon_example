import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'
import PokemonCard from '../components/PokemonCard'
import pokedata from '../dex.json'

class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      loading: true
    }
  }

  componentDidMount() {
    const { pokemon } = this.state;

    if (!pokemon) {
      this._fetchData()
      // this._loadingTimeout()
    }
  }

  _fetchData() {
    const pokemonData = pokedata.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      types: pokemon.types
    }));
    console.log('pokemon data: ', pokemonData)
      
    this.setState({pokemon: pokemonData})
    
  }

  // _loadingTimeout() {
  //   return setTimeout(() => {
  //     this.setState({loading: false})
  //   }, 10000)
  // }

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView contentContainerStyle={ styles.scrollView }>
          {this.state.pokemon && this.state.pokemon.map(pokemon => (
            <PokemonCard
              key={ pokemon.id }
              pokemon={ pokemon }
              onPress={ () => this.props.navigation.navigate('Detail', { pokemon }) }
              style={{ width: '50%' }}
            />
          ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
})

export default PokemonList;
