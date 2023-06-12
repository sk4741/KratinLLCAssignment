import React, { useState } from 'react';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a login request to the server with the provided username and password
      const response = await fetch('http://localhost:9191/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail:email, userPassword:password }),
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();
         // Store the user data in session storage
        sessionStorage.setItem('userData', JSON.stringify(data));
        console.table(data)
        alert("login sucessful....")
        window.open("/home","_self");
       
        // Update the authentication state in your application (e.g., store a token)
        // ...
      } else {
        // Login failed
        const errorData = await response.json();
        alert(errorData);
        window.open("/","_self");
      }
    } catch (error) {
      alert(error);
      window.open("/","_self");
    }
  }; 

  return (
    <div className="container mt-2 mb-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Email</label>
                  <input type="email" className="form-control" id="phone" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your register email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
            <div className="card-footer text-center">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
