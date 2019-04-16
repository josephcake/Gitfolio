import React, {Component} from 'react'

class DarkLanding extends Component {

  render(){
    return (
      <div id="DarkLanding">
        <div id="DarkLandingTop">
          <div id="DarkLandingName">
          {
            this.props.user.name
            ?
            <p>
            {this.props.user.name}
            </p>
            :
            <p>
            {this.props.user.login}
            </p>
          }
          </div>

          <div id="DarkLandingAboutMe">
            <i class="fab fa-node-js"></i>
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <span><i class="fab fa-react"></i></span>
            <i class="far fa-gem"></i>
          </div>
        </div>

        <div id="DarkLandingScrollDown">
          <button onClick={this.props.welcome}><i class="fas fa-arrow-down"></i></button>
        </div>

      </div>
    )
  }
}
export default DarkLanding
