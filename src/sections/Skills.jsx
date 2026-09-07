const skills = [
  {
    title: "Frontend",
    description: "Building modern, responsive user interfaces",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "SASS",
    ],
  },
  {
    title: "Backend",
    description: "Developing scalable APIs and backend services",
    technologies: ["Node.js", "Express.js", "C#", ".NET Web API", "REST APIs"],
  },
  {
    title: "Database",
    description: "Working with relational and NoSQL databases",
    technologies: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "AI & Cloud",
    description: "Exploring AI-powered applications and cloud platforms",
    technologies: [
      "RAG",
      "Embeddings",
      "LLMs",
      "Semantic Search",
      "AWS",
      "Azure",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-label">SKILLS</div>

      <h2 className="skills-heading">Technologies I work with</h2>

      <p className="skills-intro">
        A combination of frontend, backend, databases and AI technologies I use
        to build modern applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-number">0{index + 1}</div>

            <h3>{skill.title}</h3>

            <p className="skill-description">{skill.description}</p>

            <div className="technology-list">
              {skill.technologies.map((technology) => (
                <span className="technology-pill" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
