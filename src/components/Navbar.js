import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark px-4">
      <div className="navbar-nav">
        <Link className="nav-link click-effect" to="/">me</Link>
        <Link className="nav-link click-effect" to="/experience">experience</Link>
        <Link className="nav-link click-effect" to="/skills">skills</Link>
      </div>
      <div className="navbar-nav ms-auto align-items-center">
        <a
          href="https://github.com/janakansureshraj"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link click-effect d-flex align-items-center"
        >
          <i className="fab fa-github" style={{ fontSize: '20px', marginRight: '6px' }}></i>
        </a>
        <a
          href="https://linkedin.com/in/janakansureshraj"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link click-effect d-flex align-items-center"
        >
          <i className="fab fa-linkedin" style={{ fontSize: '20px', marginRight: '6px' }}></i>
        </a>
      </div>
    </nav>
  );
}
