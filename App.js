import React from 'react'; 
import { View } from 'react-native';
import Routes from './Routes';
import Loading from './components/Loading';

class App extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      loading: false
    }
  }

  render() { 
    if(this.state.loading) {
      return <Loading />
    } else {

      return <Routes />
    }
  }
}

export default App
