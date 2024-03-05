import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Register extends Component {
  render() {
    return (
      <div className='photogallery'>
        <fieldset>
          <legend className='color'>Delete Particular Participant</legend>
          <input
            type="text" className="register"
            ref="participantIdToDelete"
            placeholder="Enter Participant ID to delete"
          /><br/>
          <Button color="danger" onClick={this.deleteParticipant}>
            Delete Participant
          </Button>
        </fieldset>
      </div>
    );
  }

  deleteParticipant = () => {
    // Assuming you have a Participant ID to identify the record to delete
    const participantIdToDelete = this.refs.participantIdToDelete.value;

    if (!participantIdToDelete) {
      alert("Please enter a Participant ID to delete.");
      return;
    }

    axios
      .delete(`http://localhost:4000/deletedatafromclient/${participantIdToDelete}`)
      .then((response) => {
        console.log('Deleted Successfully..');
        alert("You are Successfully Withdrawn your Participation.");
        alert(`You can also Check the Status in the "View Participant Section"`);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
        alert(`Participant Id is not Found in our Database
        
Please check Partcipant Id once and Please try again.`);
      });
  };
}
