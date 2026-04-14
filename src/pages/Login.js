import { useState } from 'react';

export default function Login({ onLogin, onSwitch, onBack, feedback }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ username: username.trim(), password });
  };

  return (
    <section className="card">
      <button type="button" className="link-button" onClick={onBack}>
        Back
      </button>
      <h2>Login Page</h2>
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
            autoComplete="current-password"
            required
          />
        </label>

        <button type="submit" className="primary">
          Submit
        </button>
      </form>

      <p>
        Don't have an account?{' '}
        <button type="button" className="link-button" onClick={onSwitch}>
          Register
        </button>
      </p>
    </section>
  );
}
