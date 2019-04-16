import React, { Component } from 'react'

class Projects extends Component {
  state = {
    display: true
  }

  render(){
    return (
      <div className="project">
        <a href={this.props.project.projectLink}><img src={this.props.project.thumbnail}/></a>
      </div>
    )
  }
}
export default Projects
