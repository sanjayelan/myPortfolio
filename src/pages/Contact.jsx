import '../styles/pages.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! I will get back to you soon.')
  }

  return (
    <div className="page contact-page">
      <div className="container">
        <h2>Get In Touch</h2>
        
        <div className="contact-content">
          <section className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <h4>Email</h4>
              <a href="mailto:sanjayelangovan17@gmail.com">sanjayelangovan17@gmail.com</a>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <a href="tel:+919488617052">+91 9488617052</a>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
            <div className="info-item">
              <h4>Follow Me</h4>
              <div className="social-links-contact">
                <a href="https://github.com/sanjayelangovan" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/sanjaykumar-e/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </section>

          <section className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact
