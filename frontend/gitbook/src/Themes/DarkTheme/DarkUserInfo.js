import React, {Component} from 'react'

class DarkUserInfo extends Component {
  render(){
    return (
      <div id="DarkUserInfo">
      {
        this.props.user.name
        ?
        <li>
        Hi, my name is <span>{this.props.user.name}</span>.
        </li>
        :
        <li>
        Hi, my name is <span>{this.props.user.login}</span>.
        </li>
      }
      </div>
    )
  }
}

export default DarkUserInfo
