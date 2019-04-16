import React, { Component } from 'react'

class SkyOceanProject extends Component {
  state = {
    display: true
  }

  render(){
    return (
      <div class="SkyOceanProject">
        <a href={this.props.project.projectLink}><img src={this.props.project.thumbnail}/></a>
      </div>
    )
  }
}
export default SkyOceanProject
