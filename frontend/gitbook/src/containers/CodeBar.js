import React, {Component} from 'react'
import OriginalCode from '../layoutCodes/OriginalCode'
import DarkCode from '../layoutCodes/DarkCode'
import SkyOceanCode from '../layoutCodes/SkyOceanCode'

class Code extends Component {
  state={
    viewing: false,
  }

  handleViewing=()=>{
    this.setState({
      viewing: !this.state.viewing
    })
  }


  render(){
    return (
      <div id="CodeContainer">
        {
          this.state.viewing
          ?
          <div id="CodeChoice">
            <button onClick={this.handleViewing}>X</button>
            {
              this.props.layout === "DARK" ? <DarkCode/>
              : this.props.layout === "ORIGINAL" ? <OriginalCode/>
              : this.props.layout === "SKYOCEAN" ? <SkyOceanCode/>
              : null
            }
          </div>
          :
          <button onClick={this.handleViewing}>C</button>
        }
      </div>
    )
  }
}
export default Code
