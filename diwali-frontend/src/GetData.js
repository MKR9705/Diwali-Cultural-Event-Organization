import React, { useState } from 'react';
import axios from 'axios';

const GetData = () => {
  const [participant, setParticipant] = useState([]);

  const fetchParticipant = () => {
    axios.get("http://localhost:4000/fetch")
      .then(response => {
        console.log('Data Received Successfully', response.data);
        setParticipant(response.data); // Update the state with fetched data

        // Check if no records found
        if (response.data.length === 0) {
          alert('No records found.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again.');
      });
  };

  const hideParticipantId = (fullId) => {
    // Assuming the participant ID is a string, you can hide it as needed
    const hiddenId = '****'; // Replace with your preferred method of hiding the ID
    return hiddenId;
  };

  const showLast4Digits = (fullNumber) => {
    // Assuming the mobile number is a string
    const hiddenPart = 'X'.repeat(fullNumber.length - 4);
    const visiblePart = fullNumber.slice(-4);
    return hiddenPart + visiblePart;
  };

  return (
    <div className='getdata'>
      <h1 className='color'>Details of Past Participants</h1>
      <table className="table table-bordered table-hover table-striped" border={3} margin={2}>
        <thead>
          <tr>
            <th>Participant Id</th>
            <th>Participant Name</th>
            <th>Mobile Number</th>
            <th>gender</th>
            <th>city</th>
            <th>emailId</th>
            <th>Area PinCode</th>
          </tr>
        </thead>
        <tbody>
          {participant.map((participant) => (
            <tr key={participant.participantId}>
              <td>{hideParticipantId(participant.participantId)}</td>
              <td>{participant.participantName}</td>
              <td>{showLast4Digits(participant.mobile)}</td>
              <td>{participant.gender}</td>
              <td>{participant.city}</td>
              <td>{participant.emailId}</td>
              <td>{participant.areaPincode}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={fetchParticipant}>Click Here</button>
    </div>
  );
};

export default GetData;
