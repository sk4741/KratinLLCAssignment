import React, { useState } from 'react';

const PillReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [time, setTime] = useState('');
  const [pillName, setPillName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addReminder = () => {
    if (time && pillName) {
      const newReminder = {
        time,
        pillName
      };
      if (editMode) {
        const updatedReminders = [...reminders];
        updatedReminders[editIndex] = newReminder;
        setReminders(updatedReminders);
        setEditMode(false);
        setEditIndex(null);
      } else {
        setReminders([...reminders, newReminder]);
      }
      setTime('');
      setPillName('');
    }
  };

  const editReminder = (index) => {
    const reminder = reminders[index];
    setTime(reminder.time);
    setPillName(reminder.pillName);
    setEditMode(true);
    setEditIndex(index);
  };

  const deleteReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  return (
    <div className="container mt-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Pill Reminder</h2>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Time</label>
            <input type="time" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Enter time" required />
          </div>
          <div className="mb-3">
            <label htmlFor="pillName" className="form-label">Pill Name</label>
            <input type="text" className="form-control" id="pillName" value={pillName} onChange={(e) => setPillName(e.target.value)} placeholder="Enter pill name" required />
          </div>
          <button className="btn btn-primary me-2" onClick={addReminder}>{editMode ? 'Update Reminder' : 'Add Reminder'}</button>
          <button className="btn btn-secondary" onClick={() => { setTime(''); setPillName(''); setEditMode(false); setEditIndex(null); }}>Cancel</button>
          <div className="mt-4">
            {reminders.length > 0 ? (
              <ul className="list-group">
                {reminders.map((reminder, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Time:</strong> {reminder.time}, <strong>Pill Name:</strong> {reminder.pillName}
                    </div>
                    <div>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => editReminder(index)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteReminder(index)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reminders added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillReminder;
