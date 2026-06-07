import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Learn Skills. Teach Skills.</h1>

        <p>
          Connect with learners and mentors from around the world.
        </p>

        <div className="hero-buttons">
          <button>Get Started</button>
          <button className="secondary-btn">
            Explore Skills
          </button>
        </div>
      </section>

      <section className="stats">
        <div className="card">
          <h2>500+</h2>
          <p>Users</p>
        </div>

        <div className="card">
          <h2>200+</h2>
          <p>Skills</p>
        </div>

        <div className="card">
          <h2>100+</h2>
          <p>Exchanges</p>
        </div>
      </section>

      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="category-card">Programming</div>
          <div className="category-card">Design</div>
          <div className="category-card">Music</div>
          <div className="category-card">Languages</div>
        </div>
      </section>
    </>
  );
}

export default Home;