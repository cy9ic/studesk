import React from 'react';
import './Announcement.css';
import newImg from './assets/latest-news-blink-img.gif'
const Announcements = () => {
    const news=['what are you great at?'
    ,'my name is wakanda',
    'kleopathra is the queen',
    'Chitkara is getting bigger',
    'Business is booming',
    'Winters are coming from atlantic oceans']
    // console.log(news.length)
    const newsElement=news.map(item=>{
        return (<li key={item}className='news-item'>{item} <img src={newImg}/></li>)
    })
  return (
    <div className="news-container ">
      <div className="heading">Latest Announcements</div>
        <marquee direction="up">
          <ul className="news-list">
            {newsElement}
          </ul>
        </marquee> 
    </div>
  );
};

export default Announcements;
