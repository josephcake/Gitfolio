import React, {Component} from 'react'


class NavContainer extends Component {
  state = {
    setting: false
  }


  handleSetting = () => {
    this.setState({
      setting: !this.state.setting
    })
  }
  changeTheme = (e) => {
    this.props.changeTheme(e)
    this.setState({
      setting: !this.state.setting
    })
  }



  render (){
    return (
      <div id="NavBar">
        {
          this.state.setting
          ?
          <div id="NavChoice">
            <button onClick={this.handleSetting}>X</button>
            <li onClick={this.changeTheme}>Original</li>
            <li onClick={this.changeTheme}>Dark</li>
            <li onClick={this.changeTheme}>SkyOcean</li>
            <li onClick={this.props.saveTheme}>Save</li>
            <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITAPI_CLIENT_ID}`} >Login with Git</a>
          </div>
          :
          <button onClick={this.handleSetting}>S</button>
        }
      </div>
    )
  }
}

export default NavContainer
