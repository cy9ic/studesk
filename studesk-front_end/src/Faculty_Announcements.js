import React, { useState } from 'react';
import './FacultyAnnouncement.css';
const Faculty_Announcements = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim()===""){
      return;
    }
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className='announcement-component'>
      <h2>Add Announcement</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter an item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
};


export default Faculty_Announcements;
