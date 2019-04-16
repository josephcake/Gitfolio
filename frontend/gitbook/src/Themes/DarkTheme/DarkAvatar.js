import React, {Component} from 'react'

class DarkAvatar extends Component {
  render(){
    return (
      <div id="DarkProfilePic">
        <img src={this.props.user.avatar_url}/>
      </div>
    )
  }
}

export default DarkAvatar
