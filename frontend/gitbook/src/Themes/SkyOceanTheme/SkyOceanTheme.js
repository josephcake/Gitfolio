import React, { Component } from 'react'
import "./SkyOceanTheme.scss"
import { Droppable } from 'react-beautiful-dnd'
import Bio from '/Users/JoCake/Desktop/AccessLab/mod_5_final_project/frontend/gitbook/src/components/Bio.js'
import SkyOceanRepos from './SkyOceanRepos'
import Avatar from './Avatar.js'
import SkyOceanUserInfo from './SkyOceanUserInfo'
import SkyOceanProjects from './SkyOceanProjects'


class SkyOceanTheme extends Component {
  render(){
    let reposArray = this.props.userRepos.map((repo, index) => <SkyOceanRepos user={this.props.user} userRepos={repo} index={index}/>)
    return(
      <div id="SkyOceanPortfolioContainer">

        <div id="SkyOceanThemeContainerOne">
          <div id="SkyOceanAvatar">
            <Avatar user={this.props.user}/>
          </div>
          <div id="SkyOceanBio">
            <SkyOceanUserInfo user={this.props.user}/>
          </div>
        </div>

        <div id="SkyOceanThemeContainerTwo">
          <div className="portComponent SkyOceanProjectsContainer">
            <SkyOceanProjects user={this.props.user} handleSubmitLinks={this.props.handleSubmitLinks} projects={this.props.projects}/>
          </div>
        </div>

        <div id="SkyOceanThemeContainerThree">
          <div className="portComponent SkyOceanrepo">
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

      </div>
    )
  }
}

export default SkyOceanTheme
