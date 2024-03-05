import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participantIdToUpdate: '',
      participantName: '',
      mobile: '',
      gender: '',
      city: '',
      emailId: '',
      areaPincode: '',
    };
  }

  render() {
    return (
      <div className='photogallery'>
        <fieldset>
          <legend className='color'>Update Participant Data</legend>
          <input
            type="text" className="register"
            placeholder="Enter Participant ID to update"
            value={this.state.participantIdToUpdate}
            onChange={(e) => this.setState({ participantIdToUpdate: e.target.value })}
          /><br/>
          <input
            type="text" className="register"
            placeholder="New Participant name"
            value={this.state.participantName}
            onChange={(e) => this.setState({ participantName: e.target.value })}
          /><br/>
          <input
            type="number" className="register"
            placeholder="Update Mobile Number"
            value={this.state.mobile}
            onChange={(e) => this.setState({ mobile: e.target.value })}
          /><br/>
          <input
            type="text" className="register"
            placeholder="Change gender"
            value={this.state.gender}
            onChange={(e) => this.setState({ gender: e.target.value })}
          /><br/>
          <input
            type="text" className="register"
            placeholder="New City"
            value={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value })}
          /><br/>
          <input
            type="text" className="register"
            placeholder="New emailId"
            value={this.state.emailId}
            onChange={(e) => this.setState({ emailId: e.target.value })}
          /><br/>
          <input
            type="number" className="register"
            placeholder="New Area Pincode"
            value={this.state.areaPincode}
            onChange={(e) => this.setState({ areaPincode: e.target.value })}
          /><br/>
          <Button color="success" onClick={this.updateParticipantData}>
            Update Participant
          </Button>
        </fieldset>
      </div>
    );
  }

  updateParticipantData = () => {
    const {
      participantIdToUpdate,
      participantName,
      mobile,
      gender,
      city,
      emailId,
      areaPincode,
    } = this.state;

    // Check if participantIdToUpdate is empty
    if (!participantIdToUpdate) {
      alert('Please enter a valid Participant ID to update.');
      return;
    }

    // Validate mobile number
    if (mobile && !/^\d{10}$/.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Create an object with only the fields that have a value
    const updatedParticipantData = {
      ...(participantName && { participantName }),
      ...(mobile && { mobile }),
      ...(gender && { gender }),
      ...(city && { city }),
      ...(emailId && { emailId }),
      ...(areaPincode && { areaPincode }),
    };

    axios
      .put(
        `http://localhost:4000/updateParticipantData/${participantIdToUpdate}`,
        updatedParticipantData
      )
      .then((response) => {
        // Alert after successful update
        alert('Data updated successfully.');

        // Clear input fields after successful update
        this.setState({
          participantIdToUpdate: '',
          participantName: '',
          mobile: '',
          gender: '',
          city: '',
          emailId: '',
          areaPincode: '',
        });
      })
      .catch((error) => {
        // Alert for errors during update
        console.error('Error updating data:', error);
        alert(`Participant Id is not Found in our Database
        
Please check Partcipant Id once and Please try again.`);
alert(`You can also Check the Status in the "View Participant Section"`);
      });
  };
}
