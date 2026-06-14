import "../../Styles/Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Maikens Portfolio
        </Link>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <CustomLink to="/" onClick={closeMenu}>
            Home
          </CustomLink>
          {/* <CustomLink to="/AboutMe">About Me</CustomLink> */}
          <CustomLink to="/EarlierJobs" onClick={closeMenu}>
            Earlier Jobs
          </CustomLink>
          <CustomLink to="/MyWork" onClick={closeMenu}>
            My Work{" "}
          </CustomLink>
          <CustomLink to="/Education" onClick={closeMenu}>
            Education
          </CustomLink>
        </ul>
      </nav>
      {isOpen && (
        <div className="sidebar-overlay active" onClick={closeMenu}></div>
      )}
    </>
  );
}

function CustomLink({ to, children, onClick, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={onClick} {...props}>
        {children}
      </Link>
    </li>
  );
}
