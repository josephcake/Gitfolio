import React, {Component} from 'react'

class UserInfo extends Component {
  render(){
    return (
      <div>
        <li>
        {this.props.user.name}
        </li>
        <li>
        {this.props.user.login}
        </li>
      </div>
    )
  }
}

export default UserInfo
