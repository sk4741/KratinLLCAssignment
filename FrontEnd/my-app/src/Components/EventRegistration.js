import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventName, setEventName] = useState('');
  const [details, setDetails] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can perform any additional validation or submission logic

    // Create an object with the registration details
    const registrationData = {
      name,
      email,
      phone,
      eventName,
      details
    };

    try {
      // Send the registration data to the backend API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) {
        console.log('Registration successful');
        // Reset the form fields
        setName('');
        setEmail('');
        setPhone('');
        setEventName('');
        setDetails('');
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventName" className="form-label">Event Name:</label>
        <input
          type="text"
          className="form-control"
          id="eventName"
          value={eventName}
          onChange={handleEventNameChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="details" className="form-label">Details:</label>
        <textarea
          className="form-control"
          id="details"
          value={details}
          onChange={handleDetailsChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegistrationForm;
