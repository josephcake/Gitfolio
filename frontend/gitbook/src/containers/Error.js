import React, { Component } from 'react'

class Error extends Component {
  onClick = ()=>{
    window.location.href="/"
  }
  render(){


    return(
      <div id="errorPage">
        <h1 onClick={this.onClick}>
          <span>4</span><span>0</span><span>4</span>
        </h1>
        <h2>
          Seems like you entered the <span>wrong</span> username.
        </h2>
      </div>
    )
  }
}

export default Error
