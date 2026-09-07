function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Building with code, solving with technology.</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Sanjay Kumar, a Full Stack Software Engineer focused on
              building modern web applications and AI-powered solutions.
            </p>

            <p>
              I work across the frontend and backend, building applications
              using React, JavaScript, Node.js, Express, C# and .NET. I'm also
              exploring AI engineering concepts such as RAG, embeddings,
              semantic search and LLM-powered applications.
            </p>

            <p>
              I enjoy taking complex technical problems, understanding the
              underlying system, and turning them into reliable and
              user-friendly products.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Full Stack</h3>
              <p>Frontend, backend, APIs and databases.</p>
            </div>

            <div className="highlight-card">
              <h3>AI Engineering</h3>
              <p>RAG, embeddings, semantic search and LLM applications.</p>
            </div>

            <div className="highlight-card">
              <h3>Performance</h3>
              <p>Optimization, Web Workers and efficient application design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
