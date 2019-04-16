import React, { Component } from 'react'
import {user} from '../data/userData'
import {userRepos} from '../data/userData'

class Search extends Component {

  handleSubmit(e){
      e.preventDefault();
      this.props.getUser(this.refs.username.value);
      // this.props.getUserRepos(this.refs.username.value);
    }

  render(){
    return (
        <form onSubmit={(e)=>this.handleSubmit(e)} id="SearchGitUsername">
          <input ref="username" type="text" placeholder="Enter A GITHUB Username . . ."/>
        </form>
    )
  }
}


export default Search
