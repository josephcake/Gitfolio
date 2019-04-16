import React, { Component } from 'react';
import './App.css';
import { withRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import HomeContainer from './containers/HomeContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import { DragDropContext} from 'react-beautiful-dnd'
import {user, userRepos} from './data/userData'
import FooterContainer from "./containers/FooterContainer"
import Error from "./containers/Error"
import fetchJsonp from 'fetch-jsonp'
import JosephCake from './about/JosephCake'

require('dotenv').config()


class App extends Component {
  state={
    user: {},
    userRepos: [],
    state: "layout",
    layout: "",
    checkUser: false
  }

  changeTheme=(e)=>{
    this.setState({
      state: "layout",
      layout: e.target.innerText
    })
    console.log(e.target.innerText);
  }

  saveTheme=()=>{
    console.log("logging name", this.state);
    fetch("http://localhost:3001/users")
    .then(resp =>resp.json())
    .then(users =>{
      this.setState({
        checkUser: users.some(user=> user.username === this.state.user.login)
      }, ()=>this.patchTheme(this.state.checkUser))
    })
  }

  patchTheme =(checkUser)=> {
      console.log("settimeout", checkUser);
      if (checkUser) {
        console.log("patch", checkUser);
        fetch(`http://localhost:3001/users/${this.state.user.login}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({layout: this.state.layout, username: this.state.user.login})
        })
      } else {
        console.log("post", checkUser);
        console.log("post", this.state.layout);
        fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({layout: this.state.layout, username: this.state.user.login})
        })
        .then(resp=>resp.json())
        .then(console.log)
      }
  }


  getUser(username){

    let client_id = process.env.REACT_APP_GITAPI_CLIENT_ID
    let client_secret = process.env.REACT_APP_GITAPI_CLIENT_SECRET
    fetch(`https://api.github.com/users/${username}?${client_id}&${client_secret}`, {
      method: "GET",
      headers: {
        'Authorization': `token ${process.env.REACT_APP_GITAPI_CLIENT_TOKEN}`,
        'User-Agent': 'josephgitbook'
      }
    })
    .then(resp=>resp.json())
    .then(user => this.setState({
      user: user
    },()=>{
      if(this.state.user.message !== "Not Found"){
        console.log(this.state.user);
        this.getUserRepos(user.login)
      }else{
        this.props.history.push("/yikes")
      }
      fetch("http://localhost:3001/users")
      .then(resp =>resp.json())
      .then(users =>{
        console.log(users);
        let thisUser = users.find(user => user.username === this.state.user.login)
        console.log(thisUser);
        if (thisUser){
          this.setState({
            layout: thisUser.layout
          })
        }
      })
    }))

  }

  getUserRepos(username){
    let client_id = process.env.REACT_APP_GITAPI_CLIENT_ID
    let client_secret = process.env.REACT_APP_GITAPI_CLIENT_SECRET
    fetch(`https://api.github.com/users/${username}/repos?${client_id}&${client_secret}`, {
      method: "GET",
      headers: {
        'Authorization': `token ${process.env.REACT_APP_GITAPI_CLIENT_TOKEN}`,
       'User-Agent': 'josephgitbook'
      }
    })
    .then(resp=>resp.json())
    .then(userRepos => this.setState({
      userRepos: userRepos
    },()=>{
      this.props.history.push("/user")
    }))
  }


  onDragEnd = result => {
    const {destination, source, draggableId } = result;
    if(!destination){
      return;
    }
    if(destination.droppableId === source.droppableId &&
    destination.index === source.index ) {
      return;
    }

    const dropRepoContainer = [...this.state.userRepos]
    const newRepoId = Array.from(dropRepoContainer)
    let item = dropRepoContainer.splice(source.index, 1)
    dropRepoContainer.splice(destination.index, 0, item[0])
    this.setState({
      userRepos:dropRepoContainer
    })
  }

  componentDidMount() {
    let client_id = process.env.REACT_APP_OAUTH_CLIENT_ID
    let client_secret = process.env.REACT_APP_OAUTH_CLIENT_SECRET
    // let user = JSON.parse(localStorage.getItem("token"))
    // this.setState({
    //   user: user
    // })
    const code = window.location.href.match(/\?code=(.*)/)

    if(localStorage.token){
      console.log(JSON.parse(localStorage.getItem("token")));
      // debugger
        this.setState({
          user: JSON.parse(localStorage.getItem("token"))
        }, ()=>{
          fetch("http://localhost:3001/users")
          .then(resp =>resp.json())
          .then(users =>{
            console.log(users);
            let thisUser = users.find(user => user.username === this.state.user.login)
            console.log(thisUser);
            if (thisUser){
              this.setState({
                layout: thisUser.layout
              },()=>{
                let client_id = process.env.REACT_APP_GITAPI_CLIENT_ID
                let client_secret = process.env.REACT_APP_GITAPI_CLIENT_SECRET
                fetch(`https://api.github.com/users/${thisUser.login}/repos?${client_id}&${client_secret}`, {
                  method: "GET",
                  headers: {
                    'Authorization': `token ${process.env.REACT_APP_GITAPI_CLIENT_TOKEN}`,
                   'User-Agent': 'josephgitbook'
                  }
                })
                .then(resp=>resp.json())
                .then(userRepos => this.setState({
                  userRepos: userRepos
                }))
              })
            }
          })

        })
        console.log(this.state.user);
    }

    else if (code) {
      console.log('If the code appears', code);
      fetch(`http://localhost:3001/github-auth`,{
        method: "POST",
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          client_id : process.env.REACT_APP_OAUTH_CLIENT_ID,
          client_secret : process.env.REACT_APP_OAUTH_CLIENT_SECRET,
          code: code[1]
        })
      })
      .then(res => res.text())
      .then(access_token => {
        let firstSplit = access_token.split("=")
        let secondSplit = firstSplit[1].split("&")
        let tok = secondSplit[0]
        fetch(`https://api.github.com/user?access_token=${tok}`, {
          method: "GET"
        })
        .then(data=>data.json())
        // .then(console.log)
        .then(user => {
          localStorage.setItem("token", JSON.stringify(user))
          this.setState({
            user: user
          })
        })
      })
    }
  }


  render() {
    console.log(this.state);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
            <Switch>
              <Route exact path="/josephcake" render={()=><JosephCake/>}/>
              <Route exact path="/yikes" render={()=><Error/>}/>
              <Route exact path="/user" render={()=><PortfolioContainer user={this.state.user} userRepos={this.state.userRepos} saveTheme={this.saveTheme} changeTheme={this.changeTheme} layout={this.state.layout} currentViewState={this.state.state}/>} />
              <Route path="/" render={()=><HomeContainer getUser={(user)=>this.getUser(user)} getUserRepos={(userRepos)=>this.getUserRepos(userRepos)}/>}/>
            </Switch>
        </div>
      </DragDropContext>
    );
  }
}

export default withRouter(App);
