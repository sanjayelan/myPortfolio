import { Link } from 'react-router-dom'
import '../styles/pages.css'

function Home() {
  return (
    <div className="page home-page">
      <div className="container">
        <section className="hero">
          <h2>Welcome to My Portfolio</h2>
          <p className="hero-text">
            I'm a software engineer specializing in full-stack development and AI/ML integration. 
            I build scalable, robust solutions and seamlessly embed AI models into existing systems 
            without disruption. Passionate about clean code, best practices, and continuous innovation.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">View My Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Let's Connect</Link>
          </div>
        </section>

        <section className="highlights">
          <h3>Key Achievements</h3>
          <div className="highlight-grid">
            <div className="highlight-card">
              <h4>🤖 AI Integration</h4>
              <p>Successfully integrated new AI features into core systems with zero disruption, enhancing functionality while maintaining system stability.</p>
            </div>
            <div className="highlight-card">
              <h4>⚡ Performance Optimization</h4>
              <p>Engineered optimization strategies that reduced application load times, ensuring scalability and reliability under varying traffic loads.</p>
            </div>
            <div className="highlight-card">
              <h4>🔄 Development Excellence</h4>
              <p>Automated test cases and streamlined development lifecycle, leading to faster releases and improved code quality across projects.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
