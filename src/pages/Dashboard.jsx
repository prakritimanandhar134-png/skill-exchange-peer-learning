function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>SkillSync</h2>

        <ul>
          <li>Dashboard</li>
          <li>My Skills</li>
          <li>Profile</li>
          <li>Messages</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h1>Welcome Back!</h1>

        <div className="dashboard-cards">
          <div className="dash-card">
            <h2>5</h2>
            <p>Skills Added</p>
          </div>

          <div className="dash-card">
            <h2>12</h2>
            <p>Requests</p>
          </div>

          <div className="dash-card">
            <h2>8</h2>
            <p>Matches</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;