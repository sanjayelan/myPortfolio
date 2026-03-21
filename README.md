# Sanjay Kumar - Portfolio Website

A modern, responsive portfolio website showcasing my software engineering projects, skills, and experience in full-stack development and AI/ML integration.

## About Me

I'm an innovative Software Engineer with over 1 year of experience in full-stack development and AI integration. I specialize in building scalable solutions and seamlessly embedding AI models without disrupting existing systems. I'm passionate about clean code, best practices, and continuous innovation.

**Location:** Coimbatore, Tamil Nadu, India  
**Email:** sanjayelangovan17@gmail.com  
**Phone:** +91 9488617052

## Features

- **Multi-page Navigation** - Home, About, Projects, and Contact pages
- **Professional Profile** - Comprehensive skills, education, and certifications
- **Project Showcase** - Real projects with descriptions and technologies
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The website will open in your browser at `http://localhost:5173`

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Site header with title
│   ├── Navigation.jsx  # Navigation menu
│   ├── Footer.jsx      # Site footer
│   └── ProjectCard.jsx # Project card component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   └── Contact.jsx     # Contact form
├── styles/             # CSS files
│   ├── index.css       # Global styles
│   ├── components.css  # Component styles
│   ├── pages.css       # Page styles
│   └── App.css         # App container styles
├── App.jsx             # Main app component with routing
└── main.jsx            # React entry point
```

## Skills

**Core:** Full Stack Development, AI/ML Integration, CI/CD, Agile Methodologies

**Programming Languages:** JavaScript (ES6+), TypeScript, C#

**Frontend:** React.js (Hooks, Context), jQuery, HTML5/CSS3, Webpack

**Backend:** Node.js (Express), .NET Framework, .NET Core, REST APIs

**Databases:** MongoDB, MySQL, SQL Server

**Cloud & DevOps:** AWS, Azure, Docker, CI/CD Pipelines

**Testing & Tools:** Jest, React Testing Library, Pytest, Cypress, Git, GitHub Actions

## Featured Projects

### IT Project Management System

Full-stack web application for managing IT projects with task assignment, progress tracking, and deadline management.

- **Technologies:** React, Node.js, Express, MongoDB, REST APIs

### Object Detection & Face Recognition Web Application

Real-time application for object detection and face recognition using live camera feeds with facial comparison algorithms.

- **Technologies:** React, Python, OpenCV, Deep Learning, WebSocket

### Alumni Platform

Full-featured alumni network with blog posts, job boards, news feeds, and admin panel.

- **Technologies:** Node.js, React, MongoDB, React Context, HTML5/CSS3

## Education

- **M.Sc., Software Systems** - PSG College of Arts and Science, Coimbatore, India (2019-2024)
- **Higher Secondary Education** - AIM Matric Hr. Sec. School, Coimbatore, India (2018-2019)

## Certifications

- AWS Certified Cloud Practitioner (March 2025)
- CS50 - Harvard University (September 2024)
- Azure AI Fundamentals - Microsoft (June 2025)
- Azure Data Fundamentals - Microsoft (June 2024)

### Adding Projects

Edit `src/pages/Projects.jsx` and add new project objects to the `projects` array:

```javascript
{
  id: 7,
  title: 'Your Project Title',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://your-project-link.com'
}
```

### Updating Personal Information

- Edit the Header component in `src/components/Header.jsx` to change the title and tagline
- Update the About page in `src/pages/About.jsx` with your skills and experience
- Modify the Contact page in `src/pages/Contact.jsx` with your actual contact information

### Styling

All styles use CSS custom properties (variables) defined in `src/styles/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... more colors ... */
}
```

Modify these variables to change the color scheme throughout the site.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Netlify

1. Push your project to GitHub
2. Go to [Netlify](https://netlify.com) and click "New site from Git"
3. Select your repository
4. Set build command to `npm run build`
5. Set publish directory to `dist`
6. Click "Deploy"

### Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **React Router v6** - Client-side routing
- **CSS 3** - Styling with custom properties and media queries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Connect With Me

- **Email:** sanjayelangovan17@gmail.com
- **LinkedIn:** [linkedin.com/in/sanjaykumar-e](https://www.linkedin.com/in/sanjaykumar-e/)
- **GitHub:** [github.com/sanjayelangovan](https://github.com/sanjayelangovan)
- **Phone:** +91 9488617052

---

**Built with React + Vite** | 2026
