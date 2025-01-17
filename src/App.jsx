import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schedule from "./pages/schedules/schedules";
import LogIn from './pages/Authentication/LogIn';
import Test from './pages/test'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/test" element={<Test />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;

