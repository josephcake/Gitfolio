import React, {Component} from 'react'
import {Draggable} from 'react-beautiful-dnd'

class Repos extends Component {
  render(){

    let fullName = this.props.userRepos.full_name.split('/')
    let newFullName = fullName[1].replace(/-/g, ' ')

    return (
      <Draggable draggableId={this.props.userRepos.id} index={this.props.index}>
      {(provided)=>(
        <div id="RepoContainer"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref = {provided.innerRef}
        >
          <div>
            <a href={this.props.userRepos.html_url}>{newFullName}</a>
          </div>
        </div>
      )}
      </Draggable>
    )
  }
}

export default Repos
