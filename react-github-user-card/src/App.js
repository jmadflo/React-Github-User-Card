import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {}
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/jmadflo')
      .then(response => {
        console.log(response)
        this.setState({
          userData: response.data
        })
        console.log(this.state.userData)
      })
  }
  render() {
    return (
      <div className="App">
        
      </div>
    )
  }
  
}

export default App;
