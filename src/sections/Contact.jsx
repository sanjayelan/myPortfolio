function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-label">CONTACT</div>

        <h2 className="contact-heading">
          Let's build something
          <span> together.</span>
        </h2>

        <p className="contact-description">
          I'm always interested in discussing new opportunities, interesting
          projects, and ideas around software development and AI.
        </p>

        <a href="mailto:sanjayelangovan17@gmail.com" className="contact-email">
          sanjayelangovan17@gmail.com
          <span>↗</span>
        </a>

        <div className="contact-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sanjaykumar-e/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:sanjayelangovan17@gmail.com">Email ↗</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
