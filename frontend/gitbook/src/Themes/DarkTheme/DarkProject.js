import React, { Component } from 'react'

class DarkProject extends Component {
  state = {
    display: true
  }

  render(){
    return (
      <div className="DarkProject">
        <a href={this.props.project.projectLink}><img src={this.props.project.thumbnail}/></a>
      </div>
    )
  }
}
export default DarkProject
