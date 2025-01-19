import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Horoscope from './DashboardComponents/Horoscope';

const FirstTimeUserCheck = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const hasCompletedHoroscope = localStorage.getItem('hasCompletedHoroscope');
    setIsFirstTime(!hasCompletedHoroscope);
    setLoading(false);
  }, []);

  const handleHoroscopeComplete = () => {
    localStorage.setItem('hasCompletedHoroscope', 'true');
    setIsFirstTime(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isFirstTime) {
    return (
      <div className="min-h-screen bg-neutral-900">
        <Horoscope onComplete={handleHoroscopeComplete} />
      </div>
    );
  }

  return children;
};

export default FirstTimeUserCheck; 