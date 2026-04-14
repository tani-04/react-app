import { useState } from 'react';
import './App.css';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const STORAGE_KEY = 'react-auth-users';

function App() {
  const [page, setPage] = useState('welcome');
  const [currentUser, setCurrentUser] = useState(null);
  const [feedback, setFeedback] = useState('');

  const getUsers = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  };

  const saveUsers = (users) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  };

  const handleRegister = ({ username, password, confirmPassword }) => {
    if (!username || !password || !confirmPassword) {
      setFeedback('Please fill all fields.');
      return false;
    }
    if (password !== confirmPassword) {
      setFeedback('Passwords do not match.');
      return false;
    }

    const users = getUsers();
    if (users[username]) {
      setFeedback('Username already exists.');
      return false;
    }

    users[username] = { password };
    saveUsers(users);
    setFeedback('Registration successful. Please log in.');
    setPage('login');
    return true;
  };

  const handleLogin = ({ username, password }) => {
    if (!username || !password) {
      setFeedback('Please enter username and password.');
      return false;
    }

    const users = getUsers();
    const user = users[username];
    if (!user || user.password !== password) {
      setFeedback('Invalid username or password.');
      return false;
    }

    setCurrentUser(username);
    setFeedback('');
    setPage('home');
    return true;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setFeedback('');
    setPage('welcome');
  };

  const navigateTo = (target) => {
    setFeedback('');
    setPage(target);
  };

  return (
    <div className="app-shell">
      <main>
        {page === 'welcome' && <Welcome onLogin={() => navigateTo('login')} />}
        {page === 'login' && (
          <Login
            onLogin={handleLogin}
            onSwitch={() => navigateTo('register')}
            onBack={() => navigateTo('welcome')}
            feedback={feedback}
          />
        )}
        {page === 'register' && (
          <Register
            onRegister={handleRegister}
            onSwitch={() => navigateTo('login')}
            onBack={() => navigateTo('welcome')}
            feedback={feedback}
          />
        )}
        {page === 'home' && currentUser && (
          <Home username={currentUser} onLogout={handleLogout} />
        )}
      </main>
    </div>
  );
}

export default App;
