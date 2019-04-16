import React, {Component} from 'react'

class UserInfo extends Component {
  render(){
    let name
    if(this.props.user.name){
      name = this.props.user.name
    } else {
      name = this.props.user.login
    }
    return (
      <div id="OriginalUserInfo">
        <p>
          Hello, I'm <span id="OriginalSpanName">{name}</span>.
        </p>
      </div>
    )
  }
}

export default UserInfo
