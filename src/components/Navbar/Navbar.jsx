import { Children } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/Site Name" className="site-title">
                Site Name
            </Link>
            <ul>
                {/* <CustomLink to="/">Home</CustomLink> */}
                <CustomLink to="/AboutMe">About Me</CustomLink>
                <CustomLink to="/EarlierJobs">EarlierJobs</CustomLink>
                <CustomLink to="/MyWork">My Work </CustomLink>
                <CustomLink to="/Education">Education</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
