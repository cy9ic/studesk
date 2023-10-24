import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Announcement.css';
import newImg from '../assets/latest-news-blink-img.gif';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://victorious-hare-beret.cyclic.app/announcement/getAllAnnouncement')
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((err) => {
        setError('Failed to fetch announcements.');
        console.error(err);
      });
  }, []);

  // Check if there's an error
  if (error) {
    return <div className="news-container">Error: {error}</div>;
  }

  // Render announcements
  const announcementElements = announcements.map((announcement) => (
    <li key={announcement.id} className="news-item">
      {announcement.title} <img src={newImg} alt="News" />
    </li>
  ));

  return (
    <div className="news-container">
      <div className="heading">Latest Announcements</div>
      <marquee direction="up">
        <ul className="news-list">{announcementElements}</ul>
      </marquee>
    </div>
  );
};

export default Announcements;
