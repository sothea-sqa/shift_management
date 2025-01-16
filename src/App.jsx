import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Authentication/LogIn';
import Navbar from './Home/components/Navbar';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path='/login' element={<LogIn/>} />
        <Route path='/nav' element={<Navbar/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

