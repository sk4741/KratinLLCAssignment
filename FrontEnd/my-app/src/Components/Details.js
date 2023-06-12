import React, { useState } from 'react';

const Details = () => {
  const [weight, setWeight] = useState('');
  const [fastingBloodSugar, setFastingBloodSugar] = useState('');
  const [postprandialBloodSugar, setPostprandialBloodSugar] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [otherDiseases, setOtherDiseases] = useState('');
  const [date, setDate]=useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    const userDataString = sessionStorage.getItem('userData');
const userData = JSON.parse(userDataString);

      // Perform form submission or validation logic here
      try {
        // Send a sign-up request to the server with the provided user details
        const response = await fetch('http://localhost:9191/user/mediDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user:userData,
            weight:weight,
            fastingSugar:fastingBloodSugar,
            postSugar:postprandialBloodSugar,
            bloodPressure:bloodPressure,
            otherDiseases:otherDiseases,
            date:date
           }),
        });
  
        if (response.ok) {
          // Sign-up successful
          alert("Details submited sucessful....");
          window.open("/home","_self");
          // Handle successful sign-up (e.g., display a success message)
          // ...
        } else {
          // Sign-up failed
          alert("details fail to submit...")
          window.open("/details","_self");
          // Handle the sign-up error (e.g., display an error message)
          // ...
        }
      } catch (error) {
        // Handle any network or server errors
        // ...
        alert("details fail to submit.... NETWORK ERROR")
        window.open("/details","_self");
      }


    // Perform form submission or validation logic here
    console.log({
      weight,
      fastingBloodSugar,
      postprandialBloodSugar,
      bloodPressure,
      otherDiseases,
      date
    });

    // Reset form fields
    setWeight('');
    setFastingBloodSugar('');
    setPostprandialBloodSugar('');
    setBloodPressure('');
    setOtherDiseases('');
  };

  return (
    <div className="container mt-2 mb-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Details</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label">Weight</label>
                  <input type="text" className="form-control" id="weight" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="fastingBloodSugar" className="form-label">Fasting Blood Sugar</label>
                  <input type="text" className="form-control" id="fastingBloodSugar" placeholder="Enter your fasting blood sugar" value={fastingBloodSugar} onChange={(e) => setFastingBloodSugar(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="postprandialBloodSugar" className="form-label">Postprandial Blood Sugar</label>
                  <input type="text" className="form-control" id="postprandialBloodSugar" placeholder="Enter your postprandial blood sugar" value={postprandialBloodSugar} onChange={(e) => setPostprandialBloodSugar(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="bloodPressure" className="form-label">Blood Pressure</label>
                  <input type="text" className="form-control" id="bloodPressure" placeholder="Enter your blood pressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="otherDiseases" className="form-label">Other Diseases</label>
                  <textarea className="form-control" id="otherDiseases" placeholder="Enter any other diseases or health conditions" value={otherDiseases} onChange={(e) => setOtherDiseases(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
