import React, { Component } from 'react'

class OriginalProject extends Component {
  state = {
    display: true
  }

  render(){
    return (
      <div className="OriginalProject">
        <a href={this.props.project.projectLink}><img src={this.props.project.thumbnail}/></a>
      </div>
    )
  }
}
export default OriginalProject
