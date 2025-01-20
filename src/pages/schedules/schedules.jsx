import React, { useState, useEffect } from 'react';
import { Calendar, Modal, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Sidebar from '../../components/sidebars';

const Schedules = () => {
  const [events, setEvents] = useState({
    morning: 0,
    afternoon: 0,
    night: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [scheduleData, setScheduleData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeWVueXJ6bnN0c3R5bGt4Y2JvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQxMDU5NiwiZXhwIjoyMDUxOTg2NTk2fQ.NY0eG-1sEEjtF_y_x3MZBF7_E3ymykog-8u0ZiWDDcI';

  // Function to fetch data from Supabase API
  const fetchScheduleData = async (date) => {
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

      // Update event counts based on the fetched data
      setEvents({
        morning: data['morning count'],
        afternoon: data['afternoon count'],
        night: data['night count'],
      });

      setScheduleData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    fetchScheduleData(date);
    setShowModal(true);
    
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      <Sidebar />
      <div className="col-span-4">
        <div>
        <Calendar
          bordered
          renderCell={(date) => {
            return (
              <div>
                {/* Render the default daily event */}
                {Object.keys(events).map((key) => (
                  <div key={key} style={{ fontSize: '12px', marginTop: '4px', color: 'blue' }}>
                    <div>{events[key]} {key.charAt(0).toUpperCase() + key.slice(1)}</div>
                  </div>
                ))}
              </div>
            );
          }}
          onSelect={handleSelectDate}
          onChange={(value) => {
            const month = value.month() + 1; // Get the month (0-indexed, so add 1)
            console.log(`Currently viewing month: ${month}`);
          }}
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
              <div className="grid grid-cols-3 gap-4">
                {/* Display schedule data */}
                <div className="col-span-1 bg-[#FFE2E5] h-40 p-5 rounded-xl">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  </div>
                  <p className="font-bold text-2xl">{scheduleData["morning count"]}</p>
                  <p className="font-bold text-1xl text-[#151D48]">Morning</p>
                </div>
                <div className="col-span-1 bg-[#FFF4DE] h-40 p-5 rounded-xl">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="none" viewBox="0 0 48 48" height={48} width={48}>
                      {/* SVG Path for Afternoon */}
                    </svg>
                  </div>
                  <p className="font-bold text-2xl">{scheduleData["afternoon count"]}</p>
                  <p className="font-bold text-1xl text-[#151D48]">Afternoon</p>
                </div>
                <div className="col-span-1 bg-[#D1F8D1] h-40 p-5 rounded-xl">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="none" viewBox="0 0 48 48" height={48} width={48}>
                      {/* SVG Path for Night */}
                    </svg>
                  </div>
                  <p className="font-bold text-2xl">{scheduleData["night count"]}</p>
                  <p className="font-bold text-1xl text-[#151D48]">Night</p>
                </div>
              </div>
              <div className='mt-5 text-right'>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <a href="/infoschedule">More Info</a>
                </button>
              </div>
            
             
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Schedules;
