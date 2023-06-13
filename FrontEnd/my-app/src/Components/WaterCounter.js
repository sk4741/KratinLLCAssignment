// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const WaterTracker = () => {
//   const location = useLocation();
//   const initialCount = sessionStorage.getItem('waterCount') || 0;
//   const [count, setCount] = useState(Number(initialCount));

//   useEffect(() => {
//     sessionStorage.setItem('waterCount', count.toString());
//   }, [count]);

//   const decreaseCount = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   // Reset count to initial value when navigating away from the count page
//   useEffect(() => {
//     return () => {
//       if (location.pathname !== '/') {
//         setCount(Number(initialCount));
//       }
//     };
//   }, [location.pathname, initialCount]);

//   return (
//     <div className="container mt-3 mb-3">
//       <div className="card">
//         <div className="card-body">
//           <h2 className="card-title">Water Tracker</h2>
//           <p className="card-text">Set your daily water drinking target and receive reminders every 30 minutes.</p>
//           <div className="mb-3">
//             <p>Count: {count}</p>
//             <button className="btn btn-primary me-2" onClick={decreaseCount}>Decrease Count</button>
//           </div>
//           <div className="md-3">
//             <label htmlFor='set'>Set Count</label>
//             <input id='set' type='number' value={count} onChange={(e) => setCount(Number(e.target.value))} min="0" required/>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WaterTracker;

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const WaterTracker = () => {
  const [target, setTarget] = useState(0);
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    let interval;
    if (target > 0) {
      interval = setInterval(() => {
        setReminder(true);
      }, 1 * 60 * 1000);
    }
    return () => clearInterval(interval);
  }, [target]);

  const handleSetTarget = () => {
    setTarget(8); // Set initial target to 8
    setReminder(false);
  };

  const handleDecreaseTarget = () => {
    if (target > 0) {
      setTarget(target - 1);
    }
  };

  return (
    <div className="container mt-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Water Tracker</h2>
          <div>
            {target === 0 ? (
              <Button onClick={handleSetTarget}>Set Target</Button>
            ) : (
              <div>
                <h2>Target: {target} cups</h2>
                <Button onClick={handleDecreaseTarget}>Decrease Target</Button>
              </div>
            )}
          </div>
          {reminder && <p>Reminder: It's time to drink water!</p>}
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;
