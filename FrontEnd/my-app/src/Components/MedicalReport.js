import React, { useState, useEffect } from 'react';

function MedicalReport() {
  const [medicalDetails, setMedicalDetails] = useState(null);

  useEffect(() => {
    fetchMedicalDetails();
  }, []);

  const fetchMedicalDetails = async () => {
    const userDataString = sessionStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    const userId=userData.userId;
    try {
      const response = await fetch(`http://localhost:9191/user/mediDetails?userId=${userId}`);
      const data = await response.json();

      // Check if there are medical details available
      if (data && data.length > 0) {
        setMedicalDetails(data);
      }
    } catch (error) {
      console.log('Error fetching medical details:', error);
    }
  };

  return (
    <div className="container mt-5 mb-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Medical Report</h2>
          <div className="mb-3">
      {medicalDetails ? (
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight</th>
              <th>Fasting Blood Sugar</th>
              <th>Postprandial Blood Sugar</th>
              <th>Blood Pressure</th>
              <th>Other Diseases</th>
            </tr>
          </thead>
          <tbody>
            {medicalDetails.map((detail) => (
              <tr key={detail.recordId}>
                <td>{detail.date}</td>
                <td>{detail.weight}</td>
                <td>{detail.fastingSugar}</td>
                <td>{detail.postSugar}</td>
                <td>{detail.bloodPressure}</td>
                <td>{detail.otherDiseases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No medical details available</p>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}

export default MedicalReport;
