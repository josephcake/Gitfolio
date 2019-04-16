import React, {Component} from 'react'

class Bio extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.user.bio}</h3>
      </div>
    )
  }
}

export default Bio
