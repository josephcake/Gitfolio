import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import './OriginalTheme.scss'
import OriginalBio from './OriginalBio.js'
import OriginalRepos from './OriginalRepos'
import Avatar from '/Users/JoCake/Desktop/AccessLab/mod_5_final_project/frontend/gitbook/src/components/Avatar.js'
import OriginalUserInfo from './OriginalUserInfo'
import OriginalProjects from './OriginalProjects'


class OriginalTheme extends Component {

  state = {
    view: 0
  }

  goForwardAPage=()=>{
    this.setState({
      view: this.state.view + 1
    })
  }
  goBackAPage=()=>{
    this.setState({
      view: this.state.view - 1
    })
  }

  render(){
    let reposArray = this.props.userRepos.map((repo, index) => <OriginalRepos user={this.props.user} userRepos={repo} index={index}/>)
    return(
      <div id="OriginalPortfolioContainer">

        {
          this.state.view === 0
        ?
        <div className="OriginalportComponentOne OriginalBio">
          <OriginalUserInfo user={this.props.user}/>
          <OriginalBio user={this.props.user}/>
          <button onClick={this.goForwardAPage}>View My Works <span> =></span></button>
        </div>
        :
          this.state.view === 1
        ?
        <div className="OriginalportComponentTwo">
          <button onClick={this.goBackAPage}><span className="leftNavButton"><i class="fas fa-chevron-left"></i></span></button>
          <div className="OriginalProjectComponent">
            <OriginalProjects user={this.props.user} handleSubmitLinks={this.props.handleSubmitLinks} projects={this.props.projects} />
          </div>
          <button onClick={this.goForwardAPage}><span className="rightNavButton"><i class="fas fa-chevron-right"></i></span></button>
        </div>
        :
        <div className="OriginalportComponentThree">
        <button onClick={this.goBackAPage}><span className="leftNavButton"><i class="fas fa-chevron-left"></i></span></button>
          <div className="OriginalportComponent Originalrepo">
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
        }
      </div>
    )
  }
}

export default OriginalTheme
