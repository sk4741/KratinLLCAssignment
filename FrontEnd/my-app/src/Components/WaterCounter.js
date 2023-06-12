import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WaterTracker = () => {
  const location = useLocation();
  const initialCount = sessionStorage.getItem('waterCount') || 0;
  const [count, setCount] = useState(Number(initialCount));

  useEffect(() => {
    sessionStorage.setItem('waterCount', count.toString());
  }, [count]);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset count to initial value when navigating away from the count page
  useEffect(() => {
    return () => {
      if (location.pathname !== '/') {
        setCount(Number(initialCount));
      }
    };
  }, [location.pathname, initialCount]);

  return (
    <div className="container mt-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Water Tracker</h2>
          <p className="card-text">Set your daily water drinking target and receive reminders every 30 minutes.</p>
          <div className="mb-3">
            <p>Count: {count}</p>
            <button className="btn btn-primary me-2" onClick={decreaseCount}>Decrease Count</button>
          </div>
          <div className="md-3">
            <label htmlFor='set'>Set Count</label>
            <input id='set' type='number' value={count} onChange={(e) => setCount(Number(e.target.value))} min="0" required/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;
