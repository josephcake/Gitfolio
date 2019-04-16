import React, {Component} from 'react'
import Projects from './Projects.js'

class Followers extends Component {

  state = {
    thisProject: {
      thumbnail: null,
      projectLink: null
    }
  }

  handleTChange=(e)=>{
    this.setState({
      thisProject: {
        projectLink: this.state.thisProject.projectLink,
        thumbnail: e.target.value
      }
    })
  }

  handlePChange=(e)=>{
    this.setState({
      thisProject: {
        thumbnail: this.state.thisProject.thumbnail,
        projectLink: e.target.value
      }
    })
  }

  handleSubmitLinks=(e)=> {
    e.preventDefault()
    this.props.handleSubmitLinks(this.state.thisProject)
  }

  render (){
    console.log(this.state);
    let showingProjects = this.props.projects.map(proj => <Projects project={proj}/>)

    return (
      <div>
        <div id="project_form">
          <h1>Followers / Projects</h1>
          <form onSubmit={(e)=>this.handleSubmitLinks(e)}>
            <input type="text" value={this.state.thisProject.thumbnail} onChange={this.handleTChange} placeholder="Project Pic"/>
            <input type="text" value={this.state.thisProject.projectLink} onChange={this.handlePChange} placeholder="Project Link"/>
            <input type="submit"/>
          </form>
        </div>
        <div id="project_container">
          {showingProjects}
        </div>
      </div>
    )
  }
}

export default Followers
