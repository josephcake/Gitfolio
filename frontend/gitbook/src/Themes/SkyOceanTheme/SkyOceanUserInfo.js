import React, {Component} from 'react'

class SkyOceanUserInfo extends Component {
  render(){
    return (
      <div id="SkyOceanUserInfo">
        {
          this.props.user.name
          ?
          <p>
          Hi, my name is <span>{this.props.user.name}</span>.
          </p>
          :
          <p>
          Hi, my name is <span>{this.props.user.login}</span>.
          </p>
        }
        <p>
        Welcome to my site!
        </p>
      </div>
    )
  }
}

export default SkyOceanUserInfo
