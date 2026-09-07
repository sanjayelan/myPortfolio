import ProjectCard from '../components/ProjectCard'
import '../styles/pages.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Object Detection & Face Recognition Web Application',
      description: 'Real-time web application that performs object detection and face recognition using live camera feeds. Includes facial comparison algorithm using facial embeddings to compute and verify matching confidence between two faces for authentication.',
      technologies: ['React', 'Python', 'OpenCV', 'Deep Learning', 'WebSocket'],
      link: '#'
    },
    {
      id: 2,
      title: 'Alumni Platform',
      description: 'Full-featured alumni network with dynamic blog posts, job boards, and news feeds to facilitate alumni connections. Includes an intuitive admin panel to manage user profiles and content with modern state management practices.',
      technologies: ['Node.js', 'React', 'MongoDB', 'React Context', 'HTML5/CSS3'],
      link: '#'
    }
  ]

  return (
    <div className="page projects-page">
      <div className="container">
        <h2>My Projects</h2>
        <p className="page-intro">
          Here are some of my recent projects showcasing my skills and expertise.
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
