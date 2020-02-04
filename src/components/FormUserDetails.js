import React, { Component } from 'react'
import { AppBar,TextField,Button } from '@material-ui/core'
export class FormUserDetails extends Component {
  continue =e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const {values,handleChange} = this.props
    return (
        <React.Fragment>
          <AppBar>Enter User Details</AppBar>
          <br/>
          <TextField
            FormHelperTextProps="Enter Your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br/>
          <TextField
            FormHelperTextProps="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br/>
          <TextField
            FormHelperTextProps="Enter Your Email"
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br/>
          <br/>
          <br/>
          <Button
            variant="contained" color="primary" onClick={this.continue}
          >
            Continue
          </Button>
        </React.Fragment>
    )
  }
}

export default FormUserDetails
