
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../Announcement/Announcement.css'
export default function BasicDateCalendar() {
  return (
    <div className='calendar'>
        <h2 className='calendar-head'>Academic Calendar</h2>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    </div>
  );
}