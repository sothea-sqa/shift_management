import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schedule from "./pages/schedules/schedules";
import LogIn from './pages/Authentication/LogIn';
import Test from './pages/test'


import RTO from './Dashboard/RTO';

import NewShift from './Dashboard/Newshift';
import ShiftDashboard from './Dashboard/ShiftDashboard';
import ShiftModal from './ShiftChange/ShiftModal';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/test" element={<Test />} />
       
      

        
       
        <Route path="/rto" element={<RTO />} />
        <Route path="/newshift" element={<NewShift />} />
        <Route path="/shiftdash" element={<ShiftDashboard />} />
        <Route path="/shiftmodal" element={<ShiftModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

