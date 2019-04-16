import React, { Component } from 'react'
import './Code.css'

class DarkCode extends Component {
  render(){
    return (
      <div className="CodeContainer">

        <div className="CodeOutter">
          <h1>Landing Page</h1>
          <div className="CodeInner">
            <p><span className="IdNames">{`#UserName`}</span></p>
            <p>{`{`}</p>
            <p>{`margin: 0 1rem;`}</p>
            <p>{`font-size: 12rem;`}</p>
            <p>{`color: white;`}</p>
            <p>{`text-shadow: 8px 0 0 rgb(252, 172, 0);`}</p>
            <p>{`animation-name:`}<span className="IdNames">{` SlideName;`}</span></p>
            <p>{`animation-duration: 2s;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="keyframes">{`@keyframes`}</span> <span className="IdNames">{` SlideName`}</span></p>
            <p>{`{`}</p>
            <p>{`0%{opacity: 0; transform: translateY(-150px)}`}</p>
            <p>{`100%{opacity: 1; transform: translateY(0px)}`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#IconBar`}</span></p>
            <p>{`{`}</p>
            <p>{`display: block;`}</p>
            <p>{`margin: auto;`}</p>
            <p>{`font-size: 12rem;`}</p>
            <p>{`color: white;`}</p>
            <p>{`animation-name:`}<span className="IdNames">{` Icons;`}</span></p>
            <p>{`animation-duration: 2s;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="keyframes">{`@keyframes`}</span> <span className="IdNames">{` Icons`}</span></p>
            <p>{`{`}</p>
            <p>{`0%{opacity: 0; transform: translateY(150px)}`}</p>
            <p>{`100%{opacity: 1; transform: translateY(0px)}`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#React-Icon`}</span></p>
            <p>{`{`}</p>
            <p>{`animation: 4s infinite`}<span className="IdNames">{` React;`}</span></p>
            <p>{`}`}</p>
            <br/>
            <p><span className="keyframes">{`@keyframes`}</span> <span className="IdNames">{` React`}</span></p>
            <p>{`{`}</p>
            <p>{`0%{color: white}`}</p>
            <p>{`50%{color: rgb(0, 216, 255)}`}</p>
            <p>{`100%{color: white}`}</p>
            <p>{`}`}</p>
            <br/>
          </div>
        </div>

        <div className="CodeOutter">
          <h1>Portfoilo Page Left</h1>
          <div className="CodeInner">
            <p><span className="IdNames">{`#RepoContainer`}</span></p>
            <p>{`{`}</p>
            <p>{`overflow-y: scroll;`}</p>
            <p>{`overflow-x: hidden;`}</p>
            <p>{`max-height: 58vh;`}</p>
            <p>{`font-size: 12px;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#Repo`}</span></p>
            <p>{`{`}</p>
            <p>{`color: white;`}</p>
            <p>{`display: inline-flex;`}</p>
            <p>{`background-color: rgba(26, 39, 58, 0.7);`}</p>
            <p>{`margin: 4%;`}</p>
            <p>{`box-shadow: 10px 22px 30px 8px rgba(0,0,0,0.27);`}</p>
            <p>{`border: none;`}</p>
            <p>{`letter-spacing: 4px;`}</p>
            <p>{`word-spacing: 15px;`}</p>
            <p>{`font-weight: 100;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#Repo`}</span><span className="inputRed">{` a`}</span></p>
            <p>{`{`}</p>
            <p>{`text-decoration: none;`}</p>
            <p>{`text-transform: uppercase;`}</p>
            <p>{`color: teal;`}</p>
            <p>{`font-size: 36px;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#Repo`}</span><span className="inputRed">{` a`}</span><span className="hover">{`:hover`}</span></p>
            <p>{`{`}</p>
            <p>{`color: white;`}</p>
            <p>{`}`}</p>
            <br/>
          </div>
        </div>

        <div className="CodeOutter">
          <h1>Portfoilo Page Right</h1>
          <div className="CodeInner">
          <p><span className="IdNames">{`#ProjectContainer`}</span></p>
          <p>{`{`}</p>
          <p>{`max-height: 90vh;`}</p>
          <p>{`overflow-x: hidden;`}</p>
          <p>{`overflow-y: scroll;`}</p>
          <p>{`scroll-snap-type: y mandatory;`}</p>
          <p>{`text-align: center;`}</p>
          <p>{`}`}</p>
          <br/>
          <p><span className="IdNames">{`#ProjectContainer`}</span><span className="inputRed">{` div`}</span></p>
          <p>{`{`}</p>
          <p>{`scroll-snap-align: start;`}</p>
          <p>{`max-width: 70vw;`}</p>
          <p>{`max-height: 70vh;`}</p>
          <p>{`margin-top: 7.5vh;`}</p>
          <p>{`margin-bottom: 10.5vh;`}</p>
          <p>{`border: white 1px solid;`}</p>
          <p>{`box-shadow: 10px 22px 30px 8px rgba(0,0,0,0.27);`}</p>
          <p>{`}`}</p>
          <br/>
          </div>
        </div>

      </div>
    )
  }
}
export default DarkCode
