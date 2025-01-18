import React from 'react';
import LandingPage from './pages/LandingPage';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ChatBot from './pages/ChatBot';



const App = () => (
  <div>
    
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/chatbot" element={<ChatBot/>}/>
    </Routes>
    
  </div>
);

export default App;
