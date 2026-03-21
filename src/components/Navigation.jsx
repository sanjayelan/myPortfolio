import { Link } from 'react-router-dom'
import '../styles/components.css'

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
