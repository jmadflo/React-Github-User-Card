import React from 'react'
import axios from 'axios'
import MainUser from './components/MainUser'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mainUserData: {},
      followersData: []
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/jmadflo')
      .then(response => {
        console.log(response)
        this.setState({
          mainUserData: response.data
        })
        console.log(this.state.userData)
      })
  }
  render() {
    return (
      <div className="App">
        <MainUser mainUser={this.state.mainUserData}/>
      </div>
    )
  }
  
}

export default App;
