import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBell } from '@fortawesome/free-solid-svg-icons';
import { FaUsers } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from '../components/sidebars';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const ShiftDashboard = () => {
  const [selectedShift, setSelectedShift] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notificationCount, setNotificationCount] = useState(3); // Example: 3 notifications

  const navigate = useNavigate(); 

  const formattedDate = new Intl.DateTimeFormat('km-KH', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Phnom_Penh',
  }).format(selectedDate);

  const shifts = [
    { time: "07:00-12:00", number: 20, shiftType: "Morning", icon: faSun, bgColor: "bg-red-100" },
    { time: "12:00-05:00", number: 15, shiftType: "Afternoon", icon: faSun, bgColor: "bg-blue-100" },
    { time: "05:00-10:00", number: 8, shiftType: "Evening", icon: faMoon, bgColor: "bg-yellow-100" },
  ];

  const ShiftCard = ({ time, number, shiftType, icon, bgColor, onClick }) => (
    <div className={`p-6 ${bgColor} rounded-lg cursor-pointer`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="text-yellow-500 w-8 h-8" />
      <div className="text-pink-600 ml-60 text-2xl">{time}</div>
      <div className="flex items-center text-3xl font-bold text-gray-900 mt-2">
        <div className="mr-2">{number}</div>
        <FaUsers className="text-gray-600 w-6 h-6" />
      </div>
      <div className="text-gray-600">{shiftType}</div>
    </div>
  );

  const handleCardClick = (shift) => {
    setSelectedShift(shift);
  };

  const handleNotificationClick = () => {
    setNotificationCount(0); 
    navigate('/rto'); // Navigate to /rto page
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="p-2 border rounded"
            />

            <div className="relative ml-4">
              <button
                onClick={handleNotificationClick} // Handle the click event
                className="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              >
                <FontAwesomeIcon icon={faBell} className="text-gray-700 w-6 h-6" />
                {notificationCount > 0 && (
                  <div className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                    {notificationCount}
                  </div>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 border-t border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {shifts.map((shift, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <ShiftCard
                    {...shift}
                    onClick={() => handleCardClick(shift)}
                  />
                </div>
              ))}
            </div>
          </div>

          {selectedShift && (
            <div className="mt-6 p-4 border-t border-gray-300">
              <h3 className="text-xl font-semibold mt-4">{selectedShift.shiftType}</h3>
              <table className="min-w-full mt-4 border-spacing-4 table-auto border border-gray-300">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left text-gray-600 border border-gray-300">Name</th>
      <th className="px-4 py-2 text-left text-gray-600 border border-gray-300">Check In</th>
      <th className="px-4 py-2 text-left text-gray-600 border border-gray-300">Break Time</th>
      <th className="px-4 py-2 text-left text-gray-600 border border-gray-300">Check Out</th>
      <th className="px-4 py-2 text-left text-gray-600 border border-gray-300">Working Hours</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 text-gray-700 border border-gray-300"></td>
      <td className="px-4 py-2 text-gray-700 border border-gray-300"></td>
      <td className="px-4 py-2 text-gray-700 border border-gray-300"></td>
      <td className="px-4 py-2 text-gray-700 border border-gray-300"></td>
      <td className="px-4 py-2 text-gray-700 border border-gray-300"></td>
    </tr>
  </tbody>
</table>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShiftDashboard;
