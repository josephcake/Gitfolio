import React, { Component } from 'react'
import './DarkTheme.scss'
import { Droppable } from 'react-beautiful-dnd'
import DarkBio from './DarkBio.js'
import DarkRepos from './DarkRepos'
import DarkAvatar from './DarkAvatar.js'
import DarkUserInfo from './DarkUserInfo'
import DarkProjects from './DarkProjects'
import DarkFooter from './DarkFooter'
import DarkLanding from './DarkLanding'


class DarkTheme extends Component {
  state={
    welcome: false
  }
  welcome=()=>{
    this.setState({
      welcome: !this.state.welcome
    })
  }

  render(){
    let reposArray = this.props.userRepos.map((repo, index) => <DarkRepos user={this.props.user} userRepos={repo} index={index}/>)
    return(
      <div id="DarkTheme">
      {
        this.state.welcome
        ?
        <div id="DarkPortfolioContainer">
          <div id="DarkPortfolioInnerContainerLeft">
            <div className="DarkportComponent DarkBio">
                <DarkAvatar user={this.props.user}/>
              <div>
                <DarkUserInfo user={this.props.user}/>
                <DarkBio user={this.props.user}/>
              </div>
              <div id="DarkFooter">
                <DarkFooter />
              </div>
            </div>
            <div className="DarkportComponent Darkrepo">
              <h2>Repositories</h2>
              <Droppable droppableId="1">
              {(provided)=>(
                <span
                ref = {provided.innerRef}
                {...provided.droppableProps}
                >
                {reposArray}
                {provided.placeholder}
                </span>
              )}
              </Droppable>
            </div>
          </div>
          <div id="DarkPortfolioInnerContainerRight">
            <DarkProjects user={this.props.user} handleSubmitLinks={this.props.handleSubmitLinks} projects={this.props.projects}/>
          </div>
        </div>
        :
        <DarkLanding welcome={this.welcome} user={this.props.user}/>
      }
      </div>
    )
  }
}

export default DarkTheme
