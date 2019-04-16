import React, {Component} from 'react'

class DarkBio extends Component {
  render(){
    return (
      <div id="DarkBio">
        <h3>{this.props.user.bio}</h3>
      </div>
    )
  }
}

export default DarkBio
