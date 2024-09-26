import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // New state to store submitted login details
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [submittedPassword, setSubmittedPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the submitted values
    setSubmittedUsername(username);
    setSubmittedPassword(password);

    // Log the values in the console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Display the submitted username and password on the UI */}
      {submittedUsername && (
        <div>
          <h3>Login Details</h3>
          <p>Username: {submittedUsername}</p>
          <p>Password: {submittedPassword}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
