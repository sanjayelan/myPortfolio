const projects = [
  {
    number: "01",
    title: "AI Candidate Monitoring System",
    category: "AI / Computer Vision",
    description:
      "A browser-based candidate monitoring system designed to use computer vision and AI to analyze candidate activity during online assessments.",
    technologies: [
      "React.js",
      "Human.js",
      "WebAssembly",
      "JavaScript",
      "Computer Vision",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    number: "02",
    title: "RAG Knowledge Assistant",
    category: "Generative AI",
    description:
      "A Retrieval-Augmented Generation application that processes documents, creates embeddings, retrieves relevant information, and uses an LLM to generate contextual answers.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "RAG",
      "Embeddings",
      "LLMs",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    number: "03",
    title: "Object Detection & Face Recognition",
    category: "Computer Vision",
    description:
      "A web application that uses machine learning models to perform object detection and face recognition directly within the browser.",
    technologies: ["JavaScript", "TensorFlow.js", "ONNX", "Computer Vision"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    number: "04",
    title: "Alumni Web Platform",
    category: "Full Stack Web Development",
    description:
      "An alumni-focused web platform developed during my internship, providing a structured online experience for alumni-related information and interaction.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-label">PROJECTS</div>

      <h2 className="projects-heading">Things I've built</h2>

      <p className="projects-intro">
        A selection of projects where I explored full-stack development,
        artificial intelligence, and computer vision.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
            key={project.number}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <span className="project-category">{project.category}</span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            {/* 
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
