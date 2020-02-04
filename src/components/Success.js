import React, { Component } from 'react'
import { AppBar} from '@material-ui/core'
export class Success extends Component {
  continue =e=>{
    e.preventDefault();
    this.props.nextStep();
  }

  back =e=>{
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    return (
        <React.Fragment>
          <AppBar>Success</AppBar>
          <h1> ThankYou for Submission</h1>
          <p> You Will get an email for further information.</p>
        </React.Fragment>
    )
  }
}

export default Success