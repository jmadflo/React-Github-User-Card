import React from 'react'
import axios from 'axios'
import MainUser from './components/MainUser'
import FollowersList from './components/FollowersList'
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
        console.log(this.state.mainUserData)
      })

    // now get data for followers
    axios.get('https://api.github.com/users/jmadflo/followers')
      .then(response => {
        console.log(response)
        this.setState({
          followersData: response.data
        })
        console.log(this.state.followersData)
      })
  }
  render() {
    return (
      <div className="App">
        <MainUser mainUser={this.state.mainUserData}/>
        <hr/>
        <FollowersList followers={this.state.followersData}/>
      </div>
    )
  }
  
}

export default App;
