const certifications = [
  {
    number: "01",
    title: "GitHub Copilot Certification",
    issuer: "GitHub",
    date: "2026",
    description:
      "Certification focused on using GitHub Copilot and AI-assisted development workflows.",
    link: "#",
  },
  {
    number: "02",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    description:
      "Foundational certification covering AWS cloud concepts, services, security, and pricing.",
    link: "#",
  },
  {
    number: "03",
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    description:
      "Fundamentals of artificial intelligence concepts and Microsoft Azure AI services.",
    link: "#",
  },
  {
    number: "04",
    title: "Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    description:
      "Fundamentals of relational and non-relational data concepts and Azure data services.",
    link: "#",
  },
  {
    number: "05",
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2024",
    description:
      "Introduction to computer science, algorithms, data structures, programming, and software development.",
    link: "#",
  },
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="section-label">CERTIFICATIONS</div>

      <h2 className="certifications-heading">Learning never stops</h2>

      <p className="certifications-intro">
        Certifications and learning milestones that have helped me strengthen my
        foundation across cloud, AI, and software development.
      </p>

      <div className="certifications-list">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification.number}>
            <div className="certification-number">{certification.number}</div>

            <div className="certification-content">
              <div className="certification-top">
                <span className="certification-issuer">
                  {certification.issuer}
                </span>

                <span className="certification-date">{certification.date}</span>
              </div>

              <h3>{certification.title}</h3>

              <p>{certification.description}</p>

              <a href={certification.link} target="_blank" rel="noreferrer">
                View Credential ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
