import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import copy from 'clipboard-copy';

export default class Register extends Component {
  constructor() {
    super();
    this.participantIdRef = React.createRef();
  }

  render() {
    return (
      <div className='photogallery'>
        <fieldset>
          <legend className='color'>Register Form To Enter Participant Data</legend>
          {/* Remove the participantId input field as it's now generated on the server */}
          <input type="text" className="register" ref="participantName" placeholder="participant name" /><br />
          <input type="text" className="register" ref="gender" placeholder="gender" /><br />
          <input type="text" className="register" ref="city" placeholder="city" /><br />
          <input type="text" className="register" ref="mobile" placeholder="Mobile" /><br />
          <input type="text" className="register" ref="emailId" placeholder="email id" /><br />
          <input type="text" className="register" ref="areaPincode" placeholder="areaPincode" /><br />
          <Button color="primary" onClick={this.register}>Register</Button>

          {/* Copy Button */}
          <Button color="info" onClick={this.copyParticipantId}>Copy Participant ID</Button>
          <span ref={this.participantIdRef}></span>
        </fieldset>
      </div>
    )
  }

  register = () => {
    if (
      !this.refs.participantName.value ||
      !this.refs.gender.value ||
      !this.refs.city.value ||
      !this.refs.mobile.value ||
      !this.refs.emailId.value ||
      !this.refs.areaPincode.value
    ) {
      alert('Please fill out all the fields in the form.');
      return;
    }

    // Validate mobile number
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(this.refs.mobile.value)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Continue with the registration process if all validations pass
    const participant = {
      participantName: this.refs.participantName.value,
      gender: this.refs.gender.value,
      city: this.refs.city.value,
      mobile: this.refs.mobile.value,
      emailId: this.refs.emailId.value,
      areaPincode: this.refs.areaPincode.value,
      registrationDate: new Date().toLocaleString()
    };

    axios.post('http://localhost:4000/insertdatafromclient', participant)
      .then(response => {
        const participantId = response.data.participantId;

        console.log('Registered Successfully. Participant ID:', participantId);

        // Display a thank you message with the participantId
        alert(`Your Participant ID is: ${participantId}.\n\nPlease Copy or Note Your Id For Future Reference.`);
        alert(`Thank You for participating in our Diwali Festival Event! 

               Where The Real Enjoyment Occurs.

               And We Will Contact You Soon...  
        
                Have a great day. `);

        // Clear input fields after successful registration
        this.refs.participantName.value = '';
        this.refs.gender.value = '';
        this.refs.city.value = '';
        this.refs.mobile.value = '';
        this.refs.emailId.value = '';
        this.refs.areaPincode.value = '';

        // Set the participantId in the span for copying
        this.participantIdRef.current.innerText = participantId;
      })
      .catch(error => {
        console.error('Error registering data:', error);
        alert('Error registering data. Please try again.');
      });
  };

  copyParticipantId = () => {
    // Copy the participantId to clipboard
    copy(this.participantIdRef.current.innerText);
    alert('Participant ID copied to clipboard!');
    this.participantIdRef.current.innerText = '';
  };
}
