import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]=useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [height, setHeight] = useState('');
  const [diabetes, setDiabetes] = useState(false);
  const [bloodPressure, setBloodPressure] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(
          name, 
          email, 
          password,
          phoneNumber,
          emergencyNumber,
          age,
          gender,
          bloodGroup,
          height,
          diabetes,
          bloodPressure
    )
    // Perform form submission or validation logic here
    try {
      // Send a sign-up request to the server with the provided user details
      const response = await fetch('http://localhost:9191/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userName:name, 
          userEmail:email, 
          userPassword:password,
          userNumber:phoneNumber,
          userEmgNumber:emergencyNumber,
          userAge:age,
          userGender:gender,
          userBloodGroup:bloodGroup,
          userHeight:height,
          userDiabetes:diabetes,
          userBloodPressure:bloodPressure
         }),
      });

      if (response.ok) {
        // Sign-up successful
        alert("signup sucessful....");
        window.open("/","_self");
      } else {
        // Sign-up failed
        alert("signup failed...")
        window.open("/signup","_self");
      }
    } catch (error) {
      // Handle any network or server errors
      // ...
      alert("signup failed... NETWORK ERROR")
      window.open("/signup","_self");
    }
  };

  return (
    <div className="container mt-2 mb-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Signup</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="emergencyNumber" className="form-label">Emergency Number</label>
                  <input type="tel" className="form-control" id="emergencyNumber" placeholder="Enter your emergency number" value={emergencyNumber} onChange={(e) => setEmergencyNumber(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input type="number" className="form-control" id="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select className="form-select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                  <input type="text" className="form-control" id="bloodGroup" placeholder="Enter your blood group" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="height" className="form-label">Height</label>
                  <input type="text" className="form-control" id="height" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Diseases</label>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="disease1" checked={diabetes} onChange={(e) => setDiabetes(e.target.checked)} />
                    <label className="form-check-label" htmlFor="disease1">diabetes</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="disease2" checked={bloodPressure} onChange={(e) => setBloodPressure(e.target.checked)} />
                    <label className="form-check-label" htmlFor="disease2">Blood Pressure</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
              </form>
            </div>
            <div className="card-footer text-center">
              Already have an account? <a href="/">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
