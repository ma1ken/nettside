
import "../../Styles/Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Maikens Portfolio
            </Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                {/* <CustomLink to="/AboutMe">About Me</CustomLink> */}
                <CustomLink to="/EarlierJobs">Earlier Jobs</CustomLink>
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
