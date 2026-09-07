import '../styles/pages.css'

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <h2>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Professional Summary</h3>
            <p>
              I'm an innovative and results-driven Software Engineer with over 1 year of experience in full-stack development 
              and AI integration. I specialize in building scalable, robust software solutions and seamlessly embedding AI models 
              without disrupting legacy systems. I'm passionate about optimizing code, implementing best practices, and improving 
              development processes to deliver high-availability solutions.
            </p>
            <p>
              I have successfully integrated new AI features into core systems with zero disruption, streamlined development 
              lifecycles through test automation, and engineered performance optimizations that reduced application load times. 
              I'm committed to continuous learning and leveraging new technologies to pioneer impactful innovations.
            </p>
          </div>

          <section className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>C#</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js (Hooks, Context)</li>
                  <li>jQuery</li>
                  <li>HTML5 / CSS3</li>
                  <li>Webpack</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js (Express)</li>
                  <li>.NET Framework</li>
                  <li>.NET Core</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Databases</h4>
                <ul>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>SQL Server</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Cloud & DevOps</h4>
                <ul>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Docker</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Testing & Tools</h4>
                <ul>
                  <li>Jest</li>
                  <li>React Testing Library</li>
                  <li>Pytest</li>
                  <li>Git / GitHub Actions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>M.Sc., Software Systems</h4>
              <p className="institution">PSG College of Arts and Science, Coimbatore, India</p>
              <p className="date">July 2019 – May 2024</p>
            </div>
            <div className="education-item">
              <h4>Higher Secondary Education</h4>
              <p className="institution">AIM Matric Hr. Sec. School, Coimbatore, India</p>
              <p className="date">May 2018 – May 2019</p>
            </div>
          </section>

          <section className="certifications">
            <h3>Certifications</h3>
            <div className="certification-item">
              <span className="cert-badge">✓</span>
              <div>
                <h4>AWS Certified Cloud Practitioner</h4>
                <p>March 2025</p>
              </div>
            </div>
            <div className="certification-item">
              <span className="cert-badge">✓</span>
              <div>
                <h4>CS50 - Harvard University</h4>
                <p>September 2024</p>
              </div>
            </div>
            <div className="certification-item">
              <span className="cert-badge">✓</span>
              <div>
                <h4>Azure AI Fundamentals - Microsoft</h4>
                <p>June 2025</p>
              </div>
            </div>
            <div className="certification-item">
              <span className="cert-badge">✓</span>
              <div>
                <h4>Azure Data Fundamentals - Microsoft</h4>
                <p>June 2024</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About

