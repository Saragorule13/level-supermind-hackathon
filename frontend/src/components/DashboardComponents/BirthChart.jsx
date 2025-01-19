import React, { useState, useEffect } from 'react';

const BirthChart = ({ birthDetails }) => {
  const [chartSvg, setChartSvg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBirthChart = async () => {
      try {
        if (!birthDetails) {
          throw new Error('Birth details not provided');
        }

        const { year, month, day, hour, minute } = birthDetails;
        const url = `https://fastapi-hack-production.up.railway.app/chart/John/${year}/${month}/${day}/${hour}/${minute}/London/UK`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch birth chart');
        }

        const svgString = await response.text();
        setChartSvg(svgString);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBirthChart();
  }, [birthDetails]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-violet-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-gray-600">
        <svg className="w-12 h-12 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="birth-chart-container p-6">
      {chartSvg ? (
        <div 
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: chartSvg }} 
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-600">
          <svg className="w-8 h-8 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
          <p>No chart data available</p>
        </div>
      )}
    </div>
  );
};

export default BirthChart;
