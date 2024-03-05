import React from 'react';
import './Diwali.css'
const DiwaliStories = () => {
  const listItemStyle = {
    marginBottom: '10px', // Adjust the value to control the spacing
  };

  return (
    <div className='diwaliStories'>
      <h1 className='headcolor'>Diwali Story: The Return of Lord Rama</h1>
      <ul className='k'>
  <li>
    <div className="list-item-box">
      <b>Exile of Lord Rama:</b> The story begins with the exile of Lord Rama, an incarnation of Lord Vishnu, from his kingdom of Ayodhya for 14 years. Rama's exile was a result of his father King Dasharatha's promise to his wife Kaikeyi, who was manipulated by her maid to ask for Rama's exile and the coronation of her son, Bharata.
    </div>
  </li>
  <li>
    <div className="list-item-box">
      <b>Sita's Abduction:</b> While in exile, Lord Rama's wife, Sita, is abducted by the demon king Ravana and taken to his kingdom of Lanka. Rama, along with his loyal brother Lakshmana, embarks on a quest to rescue Sita.
    </div>
  </li>
  <li>
    <div className="list-item-box">
      <b>Hanuman's Devotion:</b> Hanuman, the monkey god and a devoted disciple of Lord Rama, plays a pivotal role in the story. He leaps across the ocean to reach Lanka, finds Sita, and reassures her that Rama is coming to rescue her.
    </div>
  </li>
  
</ul>
<br></br>
<br></br>
    </div>
  );
};

export default DiwaliStories;
