import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { checkAuthStatus } from './api/auth/logIn';
import Schedule from "./pages/schedules/schedules";
import LogIn from './pages/Authentication/LogIn';
import SignUp from './pages/Authentication/SignUp';
import Test from './pages/test'
import ShiftDashboard from './Dashboard/ShiftDashboard';
import ShiftModal from './ShiftChange/ShiftModal';
import RTO from './Dashboard/RTO';
import InfoSchedule from './pages/schedules/info_schedule';
import NewShift from './Dashboard/Newshift';

import ProtectedRoute from './components/ProtectedRoute';
import ShiftRequest from './ShiftChange/ShiftRequest';
import UserMangement from './pages/UserManagement/UserMangement';


const PublicRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { success, isAuthenticated } = await checkAuthStatus();
      setIsAuthenticated(isAuthenticated);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Navigate to="/schedule" replace /> : children;
};

const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { success, isAuthenticated } = await checkAuthStatus();
      setIsAuthenticated(isAuthenticated);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <LogIn />
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <LogIn />
          </PublicRoute>
        } />
        <Route path="/signup" element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        } />

        {/* Protected Routes */}
        <Route path="/schedule" element={
          <ProtectedRoute>
            <Schedule />
          </ProtectedRoute>
        } />
        <Route path="/test" element={
          <ProtectedRoute>
            <Test />
          </ProtectedRoute>
        } />
     
        <Route path="/infoschedule" element={
          <ProtectedRoute>
            <InfoSchedule/>
          </ProtectedRoute>
        } />
       
        
        <Route path="/rto" element={
       
            <RTO />
         
        } />
        <Route path="/newshift" element={ <NewShift />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/test" element={<Test />} />
        <Route path="/shiftdash" element={<ShiftDashboard />} />
        <Route path="/shiftmodal" element={<ShiftModal />} />
        <Route path="/request" element={<ShiftRequest />} />
        <Route path="/user" element={<UserMangement />} />
     
      </Routes>
    </BrowserRouter>
  );
};

export default App;