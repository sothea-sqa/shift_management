import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { checkAuthStatus } from './api/auth/logIn';
import Schedule from "./pages/schedules/schedules";
import LogIn from './pages/Authentication/LogIn';
import SignUp from './pages/Authentication/SignUp';
import Test from './pages/test'
import ShiftDashboard from './Dashboard/ShiftDashboard';
import ShiftModal from './ShiftChange/ShiftModal';
import InfoSchedule from './pages/schedules/info_schedule';
import NewShift from './Dashboard/Newshift';
import ProtectedRoute from './components/ProtectedRoute';
import UserMangement from './pages/UserManagement/UserMangement';
import UserProfile from './pages/UserManagement/UserProfile';
import ShiftManagement from './ShiftManagement/ShiftManagement';
import AllRequest from './ShiftChange/AllRequest';


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
       
        
      
              <Route path="/newshift" element={
        <ProtectedRoute>
          <NewShift />
        </ProtectedRoute>
      } />
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
      <Route path="/shiftdash" element={
        <ProtectedRoute>
          <ShiftDashboard />
        </ProtectedRoute>
      } />
      <Route path="/shiftmodal" element={
        <ProtectedRoute>
          <ShiftModal />
        </ProtectedRoute>
      } />
     
      <Route path="/users" element={
        <ProtectedRoute>
          <UserMangement />
        </ProtectedRoute>
      } />
      <Route path="/userprofile" element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      } />
      <Route path="/shiftManagement" element={
        <ProtectedRoute>
          <ShiftManagement />
        </ProtectedRoute>
} />
  <Route path="/request" element={
        <ProtectedRoute>
          <AllRequest />
        </ProtectedRoute>
} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;