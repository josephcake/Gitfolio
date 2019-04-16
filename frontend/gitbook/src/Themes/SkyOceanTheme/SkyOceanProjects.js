import React, {Component} from 'react'
import SkyOceanProject from './SkyOceanProject'

class SkyOceanProjects extends Component {

  state = {
    thisProject: {
      thumbnail: null,
      projectLink: null
    },
    addProjects: false,
    counts: 0
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
    if(this.state.counts !== 3){
      this.props.handleSubmitLinks(this.state.thisProject)
      this.setState({
        thisProject: {
          thumbnail: '',
          projectLink: ''
        },
        counts: this.state.counts + 1
      })
    } else {
      console.log("Limit Reached");
      alert("Limit Reached!")
    }
  }

  addProjects=()=>{
    this.setState({
      addProjects: !this.state.addProjects
    })
  }

  render (){
    console.log(this.state);
    let showingProjects = this.props.projects.map(proj => <SkyOceanProject project={proj}/>)

    return (
      <div id="SkyOceanProjectFormContainer">
        {
          this.state.addProjects
          ?
          <div id="SkyOceanProjectForm">
            <button onClick={this.addProjects} id="hide">Hide</button>
            <form onSubmit={(e)=>this.handleSubmitLinks(e)}>
              <input type="text" value={this.state.thisProject.thumbnail} onChange={this.handleTChange} placeholder="Project Pic"/>
              <input type="text" value={this.state.thisProject.projectLink} onChange={this.handlePChange} placeholder="Project Link"/>
              <input type="submit"/>
            </form>
          </div>
          :
          <button onClick={this.addProjects} id="add">Add</button>
        }

        <div id="SkyOceanProjectsContainer">
          {showingProjects}
        </div>

      </div>
    )
  }
}

export default SkyOceanProjects
