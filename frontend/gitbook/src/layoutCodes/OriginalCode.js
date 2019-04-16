import React, { Component } from 'react'
import './Code.css'

class OriginalCode extends Component {
  render(){
    let br = <br/>
    return (
      <div className="CodeContainer">
        <div className="CodeOutter">
          <h1>Landing Page</h1>
          <div className="CodeInner">
            <p><span className="IdNames">{`#UserName`}</span></p>
            <p>{`{`}</p>
            <p>{`color: teal;`}</p>
            <p>{`font-weight: 700;`}</p>
            <p>{`text-shadow: 3px 0px 0px`}</p>
            <p>{`rgb(252, 172, 0);`}</p>
            <p>{`letter-spacing: 0.5rem;`}</p>
            <p>{`animation: 4s infinite `}<span className="IdNames">{`FlashName;`}</span></p>
            <p>{`animation-delay: 3s;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="keyframes">{`@keyframes`}</span> <span className="IdNames">{`FlashName`}</span></p>
            <p>{`{`}</p>
            <p>{`0%{opacity: 0}`}</p>
            <p>{`20%{opacity: 0.8}`}</p>
            <p>{`50%{opacity: 1}`}</p>
            <p>{`80%{opacity: 0.8}`}</p>
            <p>{`100%{opacity: 0.0}`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#PageOneButton`}</span></p>
            <p>{`{`}</p>
            <p>{`background-color: rgba(114, 27, 68, 0.6);`}</p>
            <p>{`width: 10vw;`}</p>
            <p>{`height: 4vh;`}</p>
            <p>{`font-size: 2rem;`}</p>
            <p>{`border: white 3px solid;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#PageOneButton`}</span><span className="hover">{`:hover`}</span></p>
            <p>{`{`}</p>
            <p>{`background-color: rgba(174, 27, 68, 0.6);`}</p>
            <p>{`transition: ease-in;`}</p>
            <p>{`animation: 2s infinite`}<span className="IdNames">{` ShiftRight;`}</span></p>
            <p>{`animation-duration: 1;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="keyframes">{`@keyframes`}</span> <span className="IdNames">{`ShiftRight`}</span></p>
            <p>{`{`}</p>
            <p>{`0%{transform: translateX(0px);}`}</p>
            <p>{`50%{transform: translateX(50px);}`}</p>
            <p>{`100%{transform: translateX(0px);}`}</p>
            <p>{`}`}</p>
            <br/>
          </div>
        </div>

        <div className="CodeOutter">
          <h1> Project Page</h1>
          <div className="CodeInner">
            <p><span className="IdNames">{`#PageTwoButton`}</span></p>
            <p>{`{`}</p>
            <p>{`width: 3vw;`}</p>
            <p>{`text-transform: uppercase;`}</p>
            <p>{`color: white;`}</p>
            <p>{`background-color: rgb(101, 0, 173);`}</p>
            <p>{`border: none;`}</p>
            <p>{`outline: none;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#PageTwoButton`}</span><span className="hover">{`:hover`}</span></p>
            <p>{`{`}</p>
            <p>{`animation: 2s infinite`}<span className="IdNames">{` SlowGlow;`}</span></p>
            <p>{`animation-duration: 1;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="keyframes">{`@keyframes`}</span> <span className="IdNames">{`SloWGlow`}</span></p>
            <p>{`{`}</p>
            <p>{`0%{opacity: 0.5}`}</p>
            <p>{`50%{opacity: 1}`}</p>
            <p>{`100%{opacity: 0.5}`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#SubmitForm`}</span></p>
            <p>{`{`}</p>
            <p>{`display: flex;`}</p>
            <p>{`max-height: 2rem;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#SubmitForm`}</span><span className="inputRed">{` input`}</span></p>
            <p>{`{`}</p>
            <p>{`outline: none;`}</p>
            <p>{`border: none;`}</p>
            <p>{`border-bottom: 1px solid grey;`}</p>
            <p>{`font-size: 1.5rem;`}</p>
            <p>{`letter-spacing: 0.5rem;`}</p>
            <p>{`font-weight: 200;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#SubmitForm`}</span><span className="inputRed">{` input`}</span><span className="hover">{` [type="text"]`}</span></p>
            <p>{`{`}</p>
            <p>{`width: 50%;`}</p>
            <p>{`box-shadow: 4px 4px 4px grey;`}</p>
            <p>{`text-indent: 1rem;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#SubmitForm`}</span><span className="inputRed">{` input`}</span><span className="hover">{` [type="submit"]`}</span></p>
            <p>{`{`}</p>
            <p>{`box-shadow: 4px 4px 4px grey;`}</p>
            <p>{`width: 10%;`}</p>
            <p>{`height: 100%;`}</p>
            <p>{`background-color: rgba(242, 123, 31, 0.8);`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#ProjectContainer`}</span></p>
            <p>{`{`}</p>
            <p>{`width: 90%;`}</p>
            <p>{`height: 100%;`}</p>
            <p>{`margin: auto;`}</p>
            <p>{`display: flex;`}</p>
            <p>{`overflow-x: scroll;`}</p>
            <p>{`scroll-snap-type: x mandatory;`}</p>
            <p>{`background-color: white;`}</p>
            <p>{`}`}</p>
            <br/>
            <p><span className="IdNames">{`#ProjectContainer`}</span><span className="inputRed">{` div`}</span></p>
            <p>{`{`}</p>
            <p>{`scroll-snap-align: start;`}</p>
            <p>{`margin-top: 5%;`}</p>
            <p>{`margin-bottom: auto;`}</p>
            <p>{`width: 100%;`}</p>
            <p>{`height: 100%;`}</p>
            <p>{`}`}</p>
            <br/>
          </div>
        </div>

        <div className="CodeOutter">
          <h1> Repo Page</h1>
          <div className="CodeInner">
          <p><span className="IdNames">{`#RepoContainer`}</span></p>
          <p>{`{`}</p>
            <p>{`height: 90%;`}</p>
            <p>{`width: 90%;`}</p>
            <p>{`border: lightgrey solid 4px;`}</p>
            <p>{`margin: auto;`}</p>
          <p>{`}`}</p>
          <br/>
          <p><span className="IdNames">{`#Repo`}</span></p>
          <p>{`{`}</p>
            <p>{`padding: 3px;`}</p>
            <p>{`background-color: white;`}</p>
            <p>{`margin: 4%;`}</p>
            <p>{`box-shadow: 10px 22px 30px 8px rgba(0,0,0,0.27);`}</p>
            <p>{`border: none;`}</p>
            <p>{`letter-spacing: 4px;`}</p>
            <p>{`word-spacing: 15px;`}</p>
            <p>{`font-weight: 100;`}</p>
            <p>{`display: inline-flex;`}</p>
          <p>{`}`}</p>
          <br/>
          <p><span className="IdNames">{`#Repo`}</span><span className="inputRed">{` a`}</span></p>
          <p>{`{`}</p>
            <p>{`text-decoration: none;`}</p>
            <p>{`text-transform: uppercase;`}</p>
            <p>{`color: rgb(47, 51, 56);`}</p>
            <p>{`font-size: 36px;`}</p>
          <p>{`}`}</p>
          <br/>
          <p><span className="IdNames">{`#Repo`}</span><span className="inputRed">{` a`}</span><span className="hover">{`:hover`}</span></p>
          <p>{`{`}</p>
            <p>{`color: teal;`}</p>
          <p>{`}`}</p>
          <br/>
          </div>
        </div>
      </div>
    )
  }
}
export default OriginalCode
