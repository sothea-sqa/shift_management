import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schedule from "./pages/schedules/schedules";
import LogIn from './pages/Authentication/LogIn';
import SignUp from './pages/Authentication/SignUp';
import Test from './pages/test'
import Shift from "./pages/schedules/shift";
import M_dashboard from './Dashboard/M_dashboard';
import Handlers from './Dashboard/Handlers';
import DayOff from './Dashboard/DayOff';
import RTO from './Dashboard/RTO';
import InfoSchedule from './pages/schedules/info_schedule';
import NewShift from './Dashboard/Newshift';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/test" element={<Test />} />
        <Route path="/shift" element={<Shift />} />
        <Route path="/dash" element={<M_dashboard/>} />
        <Route path="/infoschedule" element={<InfoSchedule/>} />
        
        <Route path="/handlers" element={<Handlers/>} />
        <Route path="/dayoff" element={<DayOff/>} />
        <Route path="/rto" element={<RTO />} />
        <Route path="/newshift" element={<NewShift />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

