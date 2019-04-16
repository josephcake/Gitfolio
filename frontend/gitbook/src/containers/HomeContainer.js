import React, { Component } from 'react'
import Search from '../components/Search'

class HomeContainer extends Component {
  render(){
    return (
      <div id="home">
        <p>
        <span>G</span>
        <span>i</span>
        <span>f</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>o</span>
        </p>
        <p>
        A github portfolio generator
        </p>

        <Search getUser={this.props.getUser} getUserRepos={this.props.getUserRepos}/>
      </div>
    )
  }
}

export default HomeContainer
