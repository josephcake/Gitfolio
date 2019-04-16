import React, {Component} from 'react'

class Avatar extends Component {
  render(){
    return (
      <div id="profilePic">
        <img src={this.props.user.avatar_url}/>
      </div>
    )
  }
}

export default Avatar
