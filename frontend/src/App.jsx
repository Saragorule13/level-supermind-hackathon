import React from 'react';
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ChatBot from './pages/ChatBot';
import ProtectedRoute from './components/ProtectedRoute';
import FirstTimeUserCheck from './components/FirstTimeUserCheck';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <FirstTimeUserCheck>
                <Dashboard />
              </FirstTimeUserCheck>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/chatbot" 
          element={
            <ProtectedRoute>
              <FirstTimeUserCheck>
                <ChatBot />
              </FirstTimeUserCheck>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </ClerkProvider>
  );
};

export default App;
