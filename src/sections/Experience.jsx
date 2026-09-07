const experiences = [
  {
    period: "Jan 2024 — Present",
    role: "Full Stack Software Engineer",
    company: "Internet Testing System",
    location: "Coimbatore, India",
    description:
      "Working on full-stack applications, integrating AI capabilities, improving application performance, and enhancing existing production systems.",
    achievements: [
      "Developed and integrated new product features using React.js and backend technologies.",
      "Integrated AI-powered capabilities into existing applications.",
      "Optimized legacy application performance using Web Workers and multithreading techniques.",
      "Improved existing code quality and resolved security vulnerabilities without breaking existing workflows.",
      "Implemented backend authentication and API-level security.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "C#",
      ".NET",
      "AI",
      "Web Workers",
    ],
  },
  {
    period: "Aug 2022 — Dec 2022",
    role: "Full Stack Web Developer Intern",
    company: "PSG Institute of Management",
    location: "Coimbatore, India",
    description:
      "Worked on the development of an alumni web platform and gained hands-on experience in full-stack web development.",
    achievements: [
      "Developed an alumni webpage as part of the internship project.",
      "Built responsive user interfaces for different screen sizes.",
      "Worked with frontend and backend technologies to implement application features.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Development"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-label">EXPERIENCE</div>

      <h2 className="experience-heading">Where I've worked</h2>

      <p className="experience-intro">
        My journey building web applications, working with modern technologies,
        and solving real-world engineering problems.
      </p>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <article className="experience-item" key={experience.company}>
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <span className="experience-period">{experience.period}</span>

                  <h3>{experience.role}</h3>

                  <h4>{experience.company}</h4>

                  <span className="experience-location">
                    {experience.location}
                  </span>
                </div>
              </div>

              <p className="experience-description">{experience.description}</p>

              <ul className="experience-achievements">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>
                    <span className="achievement-dot">✦</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="experience-technologies">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
