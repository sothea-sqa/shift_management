import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebars';
import { useParams } from 'react-router-dom';
const SUPABASE_API_URL = "https://psyenyrznststylkxcbo.supabase.co/functions/v1/daily_schedule";
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeWVueXJ6bnN0c3R5bGt4Y2JvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQxMDU5NiwiZXhwIjoyMDUxOTg2NTk2fQ.NY0eG-1sEEjtF_y_x3MZBF7_E3ymykog-8u0ZiWDDcI";

const ScheduleTimeline = () => {
  const times = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  const { date } = useParams(); 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const convertTimeTo24Hr = (time) => {
    return parseInt(time.split(':')[0], 10);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(SUPABASE_API_URL, {
          headers: {
            'Authorization': `Bearer ${JWT_TOKEN}`,
            'Content-Type': 'application/json'
          },
          params: {
            date: selectedDate?.toISOString().split('T')[0] 
          }
        });

        const userData = response.data.data.map((item) => ({
          name: `${item.user_name.first_name} ${item.user_name.last_name}`,
          clockInTime: item.clock_in_time,
          clockOutTime: item.clock_out_time
        }));

        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  
 
  return (
    <div className="grid grid-cols-7 gap-4">
      <Sidebar />
        <div className="container mx-auto p-4 overflow-auto col-span-6">
        
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
                <th className="border px-4 py-2 text-lg font-semibold w-2/4">User</th>
                {times.map((time, index) => (
                    <th key={index} className="border px-4 py-2">{time}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, userIndex) => (
              <tr key={userIndex}>
                <td className="border px-4 py-2">{user.name}</td>
                {times.map((time, timeIndex) => {
                  const timeInHours = convertTimeTo24Hr(time);
                  const clockInTime = convertTimeTo24Hr(user.clockInTime);
                  const clockOutTime = convertTimeTo24Hr(user.clockOutTime);
                  const isInRange = timeInHours >= clockInTime && timeInHours < clockOutTime;

                  return (
                    <td
                      key={timeIndex}
                      className={`border px-4 py-2 ${isInRange ? 'bg-yellow-500' : ''}`}
                    >
                      {isInRange}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default ScheduleTimeline;
