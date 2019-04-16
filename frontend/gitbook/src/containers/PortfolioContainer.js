import React, { Component } from 'react'
import Nav from './NavContainer'
import Code from './CodeBar'
import OriginalTheme from '../Themes/OriginalTheme/OriginalTheme'
import DarkTheme from '../Themes/DarkTheme/DarkTheme'
import SkyOceanTheme from '../Themes/SkyOceanTheme/SkyOceanTheme'
import fetchJsonp from 'fetch-jsonp'



class PortfolioContainer extends Component {

  state = {
    projects: []
  }


  handleSubmitLinks=(state)=> {
    this.setState({
      projects: [...this.state.projects, state]
    },console.log(this.state.projects))
  }


  render(){
    console.log(this.state.projects);
    return(

      <div>
      <Code layout={this.props.layout}/>
      <Nav changeTheme={this.props.changeTheme} saveTheme={this.props.saveTheme}/>
      { this.props.currentViewState === "layout"
        ?
          this.props.layout === "ORIGINAL" ? <OriginalTheme user={this.props.user} userRepos={this.props.userRepos} handleSubmitLinks={this.handleSubmitLinks} projects={this.state.projects}/>
          : this.props.layout === "DARK" ? <DarkTheme user={this.props.user} userRepos={this.props.userRepos} handleSubmitLinks={this.handleSubmitLinks} projects={this.state.projects}/>
          : this.props.layout === "SKYOCEAN" ? <SkyOceanTheme user={this.props.user} userRepos={this.props.userRepos} handleSubmitLinks={this.handleSubmitLinks} projects={this.state.projects}/>
          : <OriginalTheme user={this.props.user} userRepos={this.props.userRepos} handleSubmitLinks={this.handleSubmitLinks} projects={this.state.projects}/>

        : null
      }


      </div>

    )
  }
}
export default PortfolioContainer
