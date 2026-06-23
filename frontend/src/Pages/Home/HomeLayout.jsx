import "../../Styles/Pages.css";
import "../../Styles/HomeLayout.css";
import maikenPhoto from "../../Images/maiken1_2025.jpg";

export default function HomeLayout() {
  return (
    <div className="content-container">
      <div className="text-image-section home-intro-section">
        <div className="text home-intro-text">
          <h1>Hi, Im Maiken</h1>
          <p>
            Interactive Design graduate with a strong interest in UX, UI, and
            frontend development. I like building solutions that are not only
            visually clean, but also useful and easy to navigate in real life.
          </p>
          <p>
            Right now, Im focused on growing as a junior UX/UI and frontend
            profile. This portfolio is where I collect projects, work
            experience, and practical examples of how I solve problems.
          </p>

          <div className="home-contact-card">
            <h3>Contact</h3>
            <p>Email: maikensynneva@gmail.com</p>
            <p>Location: Oslo, Norway</p>
            <p>
              <a
                href="https://www.linkedin.com/in/maiken-jørgensen-edvardsen-853b5b203"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/ma1ken"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="home-skill-chips">
            <div className="home-skill-chips-row">
              <span>UX Design</span>
              <span>UI Design</span>
              <span>Interaction Design</span>
              <span>Figma</span>
            </div>
            <div className="home-skill-chips-row">
              <span>User Research</span>
              <span>User Testing</span>
              <span>Prototyping</span>
              <span>Information Architecture</span>
            </div>
            <div className="home-skill-chips-row">
              <span>Design Systems</span>
              <span>Accessibility (WCAG)</span>
              <span>React</span>
              <span>Frontend Development</span>
            </div>
          </div>
        </div>

        <div className="image home-intro-image">
          <img src={maikenPhoto} alt="Portrait photo of Maiken" />
        </div>
      </div>

      <div className="section-color"></div>

      <h2>Plans for this website</h2>
      <ul>
        <li>
          Optimize CSS on all pages with induvidual files, so it looks better
          and more user friendly, as it looks a little bit messy on some pages
          at the moment.
        </li>
        <li>
          Fill out and add more information on all pages, especially "My Work".
          There will be added more projects to showcase my experience.
        </li>
        <li>
          Create an API with all my data, instead of writing it in my JSX files.
        </li>
        <li>
          Add a promt when the user opens the website, and they will choose
          between lightmode/darkmode or an experiene adapted for extra visual
          support.
        </li>
        <li>
          Optimize the website for more devices and add a sidebar insted of a
          navigation bar on phones.
        </li>
        <li>
          Change the route links on each page, so that they show up correctly in
          the URL. Change favicon aswell.
        </li>
        <li>
          Personalize the whole website and make it more fun. I want more pages
          on "About Me" with different themes about my hobbies (music, gaming,
          movies").
        </li>
      </ul>
    </div>
  );
}
