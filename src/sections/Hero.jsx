function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>Sanjay Kumar</h1>

        <h2>Full Stack Software Engineer</h2>

        <p className="hero-description">
          I build scalable web applications and practical AI-powered solutions
          using React, Node.js, .NET and modern AI technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a
            href="/Sanjay_Kumar_Elangovan_Resume.pdf"
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
