import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebars';
import { Modal, Button } from 'rsuite';

const ShiftRequest = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [shiftData, setShiftData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeWVueXJ6bnN0c3R5bGt4Y2JvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQxMDU5NiwiZXhwIjoyMDUxOTg2NTk2fQ.NY0eG-1sEEjtF_y_x3MZBF7_E3ymykog-8u0ZiWDDcI';

  // Handle shift request form submission
  const handleShiftRequestSubmit = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      setError('Both dates are required.');
      return;
    }

    try {
      setError('');
      const response = await fetch('https://psyenyrznststylkxcbo.supabase.co/functions/v1/shift_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWT_TOKEN}`,
         
        },
        body: JSON.stringify({
          schedule_id: 14, 
          user_id: 1, 
          startDate,
          endDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit shift request.');
      }

      const data = await response.json();
      setShiftData(data);
      alert('Shift request successfully submitted!');
      setStartDate('');
      setEndDate('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      <Sidebar />
      <div className="col-span-4">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-6">Request a Shift</h2>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <form onSubmit={handleShiftRequestSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="col-span-2 flex mt-6">
              <button
                type="submit"
                className="inline-flex m-3 justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal for confirming submission */}
      {shiftData && (
        <Modal open={true} onClose={() => setShiftData(null)}>
          <Modal.Header>
            <Modal.Title>Shift Request Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Shift request for {shiftData.startDate} to {shiftData.endDate} has been successfully submitted.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShiftData(null)} appearance="subtle">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ShiftRequest;
