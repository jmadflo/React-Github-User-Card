import React from 'react'
import axios from 'axios'
import MainUser from './components/MainUser'
import FollowersList from './components/FollowersList'
import SearchForm from './components/SearchForm'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mainUserUsername: 'jmadflo',
      mainUserData: {},
      followersData: [],
      searchInputVal: ''
    }
  }

  fetchUserAndFollowers(username) {
    // get main user data
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        console.log(response)
        this.setState({
          mainUserData: response.data
        })
        console.log(this.state.mainUserData)
      })
      .catch(error => {
        console.log("couldn't get main user", error)
      })

    // now get data for followers
    axios.get(`https://api.github.com/users/${username}/followers`)
      .then(response => {
        console.log(response)
        this.setState({
          followersData: response.data
        })
        console.log(this.state.followersData)
      })
      .catch(error => {
        console.log("couldn't get followers", error)
      })
  }
  
  // search form methods
  submitNewUser = event => {
    event.preventDefault()
    this.setState({
      mainUserUsername: this.state.searchInputVal,
      searchInputVal: ''
    })
  }

  updateSearchForm = event => {
    this.setState({
      searchInputVal: event.target.value
    })
  }

  // lifecycle methods
  componentDidMount() {
    this.fetchUserAndFollowers(this.state.mainUserUsername)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.mainUserUsername !== prevState.mainUserUsername){
      this.fetchUserAndFollowers(this.state.mainUserUsername)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="searchContainer">
          <SearchForm submitNewUser={this.submitNewUser} searchInputVal={this.state.searchInputVal} updateSearchForm={this.updateSearchForm}/>
        </div>
        <MainUser mainUser={this.state.mainUserData}/>
        <hr/>
        <FollowersList followers={this.state.followersData}/>
      </div>
    )
  }
  
}

export default App;
