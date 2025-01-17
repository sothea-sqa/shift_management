import React, { useState, useEffect } from 'react';
import { Calendar, Modal, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Sidebar from '../../components/sidebars';

const Schedules = () => {
  const [events, setEvents] = useState([
    { date: new Date(2025, 0, 20), title: 'Meeting with John' },
    { date: new Date(2025, 0, 25), title: 'Doctor Appointment' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [scheduleData, setScheduleData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeWVueXJ6bnN0c3R5bGt4Y2JvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQxMDU5NiwiZXhwIjoyMDUxOTg2NTk2fQ.NY0eG-1sEEjtF_y_x3MZBF7_E3ymykog-8u0ZiWDDcI';

  // Function to fetch data from Supabase API
  const fetchScheduleData = async (date) => {
    // Convert the selected date to UTC
    const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0]; // Format as 'YYYY-MM-DD'
  
    const url = `https://psyenyrznststylkxcbo.supabase.co/functions/v1/daily_schedule?date=${utcDate}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
  
      if (!response.ok) {
        console.error('Error fetching data:', response.status, response.statusText);
        return;
      }
  
      const data = await response.json();
      console.log('Fetched data:', data); // Debug log
      setScheduleData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  
  

  // Handle when a date is selected
  const handleSelectDate = (date) => {
    console.log('Selected date:', date);
    setSelectedDate(date);
    fetchScheduleData(date); // Fetch schedule data for the selected date
    setShowModal(true); // Show modal when a date is selected
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      <Sidebar />
      <div className="col-span-4">
        <div>
          <Calendar
            bordered
            events={events}
            renderCell={(date) => {
              const event = events.find(
                (event) => event.date.toDateString() === date.toDateString()
              );
              return event ? <div>{event.title}</div> : null;
            }}
            onSelect={handleSelectDate} // Use onSelect instead of onSelectDate
          />
        </div>
        <div>
          <p>Hello world</p>
        </div>
      </div>

      {/* Modal for showing schedule data */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Schedule for {selectedDate ? selectedDate.toDateString() : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {scheduleData ? (
           <div>
            <p>Date: {scheduleData.date}</p>
            <p>Count: {scheduleData.morningCount}</p>
            {scheduleData.data.map((item) => (
              <div key={item.id}>
                <p>Working Hours: {item.working_hours}</p>
                <p>Break Hours: {item.break_hours}</p>
                <p>Clock In: {item.clock_in_time}</p>
                <p>Clock Out: {item.clock_out_time}</p>
                <p>Day: {item.day}</p>
                <p>Status: {item.is_active === 'true' ? 'Active' : 'Inactive'}</p>
                <p>
                  User Name :  &nbsp;
                  
                            {typeof item.user_name === 'object' 
                              ? `${item.user_name.first_name} ${item.user_name.last_name}` 
                              : item.user_name}
                </p>
             </div>
           ))}
         </div>
         
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)} appearance="subtle">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Schedules;
