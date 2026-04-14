export default function Welcome({ onLogin }) {
  return (
    <section className="card">
      <h2>Welcome</h2>
      <p>Welcome to the app! </p> 
      <p>Please log in to continue.</p>
      <button type="button" className="primary" onClick={onLogin}>
        Login
      </button>
    </section>
  );
}
