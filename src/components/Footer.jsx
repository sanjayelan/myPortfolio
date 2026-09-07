import '../styles/components.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/sanjayelangovan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sanjaykumar-e/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:sanjayelangovan17@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
