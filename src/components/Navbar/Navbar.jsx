import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/Site Name" className="site-title">
                Site Name
            </a>
            <ul>
                <li>
                    <a href="/aboutMe">About Me</a>
                </li>
                <li>
                    <a href="/earlierJobs">Earlier Jobs</a>
                </li>
                <li>
                    <a href="/myWork">My Work</a>
                </li>
                <li>
                    <a href="/education">Education</a>
                </li>
            </ul>
        </nav>
    );
}
