import React, { Component } from 'react'
import { AppBar,TextField,Button } from '@material-ui/core'
export class FormPersonalDetails extends Component {
  continue =e=>{
    e.preventDefault();
    this.props.nextStep();
  }

  back =e=>{
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values,handleChange} = this.props
    return (
        <React.Fragment>
          <AppBar>Enter User Details</AppBar>
          <br/>
          <TextField
            FormHelperTextProps="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
            FormHelperTextProps="Enter Your City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <TextField
            FormHelperTextProps="Enter Your Bio"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br/>
          <br/>
          <br/>
          <Button
            variant="contained" color="primary" onClick={this.continue}
          >
            Continue
          </Button>

          <Button
            variant="outline"  onClick={this.back}
          >
            Back
          </Button>
        </React.Fragment>
    )
  }
}

export default FormPersonalDetails
