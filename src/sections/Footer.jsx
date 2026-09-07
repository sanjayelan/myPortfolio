function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            SK<span>.</span>
          </a>

          <p>Full Stack Software Engineer </p>
        </div>

        <div className="footer-right">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Sanjay Kumar. All rights reserved.</span>

        <span>Built with React.js</span>
      </div>
    </footer>
  );
}

export default Footer;
