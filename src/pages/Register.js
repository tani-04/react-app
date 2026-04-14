import { useState } from 'react';

export default function Register({ onRegister, onSwitch, onBack, feedback }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister({ username: username.trim(), password, confirmPassword });
  };

  return (
    <section className="card">
      <button type="button" className="link-button" onClick={onBack}>
        Back
      </button>
      <h2>Register</h2>
      {feedback && <div className="message">{feedback}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="username"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            required
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
            required
          />
        </label>

        <button type="submit" className="primary">
          Submit
        </button>
      </form>

      <p>
        Already have an account?{' '}
        <button type="button" className="link-button" onClick={onSwitch}>
          Login
        </button>
      </p>
    </section>
  );
}
