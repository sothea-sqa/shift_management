import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Schedule from "./pages/schedules/schedules";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Schedule />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

