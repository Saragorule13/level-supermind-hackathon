import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Horoscope from './DashboardComponents/Horoscope';

const FirstTimeUserCheck = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    const hasCompletedHoroscope = localStorage.getItem('hasCompletedHoroscope');
    setIsFirstTime(!hasCompletedHoroscope);
    setLoading(false);
  }, []);

  const handleHoroscopeComplete = async (horoscopeData) => {
    try {
      if (!horoscopeData) {
        throw new Error('Horoscope data is required');
      }

      console.log('Received horoscope data:', horoscopeData);

      const userData = {
        id: user.id,
        metadata: {
          name: horoscopeData.name || '',
          age: horoscopeData.age || '',
          gender: horoscopeData.gender || '',
          bod: horoscopeData.birthDate || '',
          tod: horoscopeData.birthTime || '',
          city: horoscopeData.city || '',
          state: horoscopeData.state || '',
          username: user.username || '',
        },
      };

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/insertData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userData }),
      });

      if (!response.ok) {
        throw new Error('Failed to save user data');
      }

      localStorage.setItem('hasCompletedHoroscope', 'true');
      setIsFirstTime(false);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isFirstTime) {
    return <Horoscope onComplete={handleHoroscopeComplete} />;
  }

  return children;
};

export default FirstTimeUserCheck;