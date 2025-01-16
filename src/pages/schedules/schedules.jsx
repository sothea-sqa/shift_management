import React, { useState } from 'react';
import { Calendar, Modal, Button, Input } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Sidebar from '../../components/sidebars';
const schedules = () => {
  const [events, setEvents] = useState([
    { date: new Date(2025, 0, 20), title: 'Meeting with John' },
    { date: new Date(2025, 0, 25), title: 'Doctor Appointment' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  // Handle adding new event
  const handleAddEvent = () => {
    if (selectedDate && newEvent) {
      setEvents([...events, { date: selectedDate, title: newEvent }]);
      setNewEvent('');
      setShowModal(false);
    }
  };

  return (
    <div className='grid grid-cols-5 gap-4'>
      <Sidebar/>
      <div className='col-span-4'>
            <Calendar
                bordered
                events={events}
                renderCell={(date) => {
                const event = events.find((event) => event.date.toDateString() === date.toDateString());
                return event ? <div>{event.title}</div> : null;
                }}
                onSelectDate={(date) => {
                setSelectedDate(date);
                setShowModal(true); // Show modal when a date is selected
                }}
            />   
      </div>
      




      {/* Modal for adding a new event */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={newEvent}
            onChange={(value) => setNewEvent(value)}
            placeholder="Enter event title"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddEvent} appearance="primary">Add Event</Button>
          <Button onClick={() => setShowModal(false)} appearance="subtle">Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default schedules;
