import React, { Component } from 'react'
import './Code.css'

class SkyOceanCode extends Component {
  render(){
    return (
      <div className="CodeContainer">
        <div className="CodeOutter">
          <h1>Page One</h1>
          <div className="CodeInner">
            <p><span className="IdNames">{`#TopPage`}</span></p>
            <p>{`{`}</p>
            <p>{`display: flex;`}</p>
            <p>{`height: 101vh;`}</p>
            <p>{`filter: grayscale(0.2);`}</p>
            <p>{`background-image: url('picture');`}</p>
            <p>{`background-size: cover;`}</p>
            <p>{`background-position: top;`}</p>
            <p>{`clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#Greeting`}</span></p>
            <p>{`{`}</p>
            <p>{`width: 100%;`}</p>
            <p>{`height: 100%;`}</p>
            <p>{`animation: 2s ease-in-out `}<span className="IdNames">{`skyoceanGreet;`}</span></p>
            <p>{`backface-visibility: hidden;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="keyframes">{`@keyframes`}</span> <span className="IdNames">{`skyoceanGreet`}</span></p>
            <p>{`{`}</p>
            <p>{`0%{opacity: 0; transform: translateX(100px)}`}</p>
            <p>{`70%{opacity: 0.7; transform: translateX(-10px)}`}</p>
            <p>{`100%{opacity: 1; transform: translateX(0px)}`}</p>
            <p>{`}`}</p>
            <br/>
          </div>
        </div>
        <div className="CodeOutter">
          <h1>Page Two</h1>
          <div className="CodeInner">
            <p><span className="IdNames">{`#MidPage`}</span></p>
            <p>{`{`}</p>
            <p>{`display: flex;`}</p>
            <p>{`height: 101vh;`}</p>
            <p>{`filter: grayscale(0.2);`}</p>
            <p>{`background-image: url('picture');`}</p>
            <p>{`background-size: cover;`}</p>
            <p>{`background-position: top;`}</p>
            <p>{`clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#ProjectsContainer`}</span></p>
            <p>{`{`}</p>
            <p>{`display: flex;`}</p>
            <p>{`width: 100vw;`}</p>
            <p>{`height: 50%;`}</p>
            <p>{`margin-left: auto;`}</p>
            <p>{`margin-right: auto;`}</p>
            <p>{`}`}</p>
          </div>
        </div>
        <div className="CodeOutter">
          <h1>Page Three</h1>
          <div className="CodeInner">
            <p><span className="IdNames">{`#LastPage`}</span></p>
            <p>{`{`}</p>
            <p>{`display: flex;`}</p>
            <p>{`height: 101vh;`}</p>
            <p>{`filter: grayscale(0.2);`}</p>
            <p>{`background-image: url('picture');`}</p>
            <p>{`background-size: cover;`}</p>
            <p>{`background-position: top;`}</p>
            <p>{`clip-path: polygon(0 25vh, 100% 0, 100% 100vh, 0 100%);`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#Repo`}</span></p>
            <p>{`{`}</p>
            <p>{`padding: 3px;`}</p>
            <p>{`background-color: rgb(247, 169, 54);`}</p>
            <p>{`margin: 4%;`}</p>
            <p>{`box-shadow: 10px 22px 30px 8px rgba(0,0,0,0.27);`}</p>
            <p>{`border: none;`}</p>
            <p>{`word-spacing: 15px;`}</p>
            <p>{`font-weight: 100;`}</p>
            <p>{`display: inline-flex;`}</p>
            <p>{`opacity: 0.8;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#Repo`}</span><span className="inputRed">{` a`}</span></p>
            <p>{`{`}</p>
            <p>{`text-decoration: none;`}</p>
            <p>{`text-transform: uppercase;`}</p>
            <p>{`color: rgb(47, 51, 56);`}</p>
            <p>{`font-size: 4rem;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#Repo`}</span><span className="inputRed">{` a`}</span><span className="hover">{`:hover`}</span></p>
            <p>{`{`}</p>
            <p>{`color: white;`}</p>
            <p>{`}`}</p>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}
export default SkyOceanCode
