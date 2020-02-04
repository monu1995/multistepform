import React, { Component } from 'react'
import { AppBar,Button,List,ListItemText } from '@material-ui/core'
export class Confirm extends Component {
  continue =e=>{
    e.preventDefault();
    this.props.nextStep();
  }

  back =e=>{
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values:{firstName,lastName,email,occupation,city,bio}} = this.props
    return (
        <React.Fragment>
          <AppBar>Enter User Details</AppBar>
          <br/>
          <List>
            <ListItemText primary='First Name' secondary={firstName}/>
            <ListItemText primary='Last Name' secondary={lastName}/>
            <ListItemText primary='Email' secondary={email}/>
            <ListItemText primary='Occupation' secondary={occupation}/>
            <ListItemText primary='City' secondary={city}/>
            <ListItemText primary='Bio' secondary={bio}/>
            
          </List>
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

export default Confirm;
