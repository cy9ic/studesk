import React, { useState } from 'react';
import './FacultyAnnouncement.css';
import axios from 'axios';
const Faculty_Announcements = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      return;
    }
    try {
      axios.post('https://victorious-hare-beret.cyclic.app/announcement/create', {
        conten: "announcement add",class:"3A"
      });
      console.log('Announcement successfully added!');
    } catch (error) {
      console.error(error);
    }
    setItems([...items, input]);
    setInput('');
  };


  return (
    <div className="announcement-component">
      <h2>Add Announcement</h2>
      <div className="announcement-list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="announcement-input-container">
        <input
          className="announcement-input"
          type="text"
          placeholder="Enter an item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className="announcement-submit" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Faculty_Announcements;
