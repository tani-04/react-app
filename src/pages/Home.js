export default function Home({ username, onLogout }) {
  return (
    <section className="card">
      <h2>Home</h2>
      <p>Welcome, <strong>{username}</strong>!</p>
      <button type="button" className="primary" onClick={onLogout}>
        Logout
      </button>
    </section>
  );
}
