import "../../Styles/Pages.css";
import "../../Styles/AboutMeLayout.css";
import "../../Styles/Cards.css";
import maiken from "../../Images/maiken1_2025.jpg";

export default function AboutMeLayout() {
  return (
    <div className="content-container about-page">
      <div className="about-hero-layout">
        <div className="about-main-column">
          <div className="text about-intro-text">
            <h1>Hi, I'm Maiken!</h1>
            <p>
              Interactive Design graduate with a strong interest in UX, UI, and
              frontend development. I like building solutions that are not only
              visually clean, but also useful and easy to navigate in real life.
              Right now, I'm focused on growing as a junior UX/UI and frontend
              profile. This portfolio is where I collect projects, work
              experience, and practical examples of how I solve problems.
            </p>
          </div>

          <div className="double-text-section about-story-section">
            <div className="text about-section-card">
              <h2>How I work</h2>
              <p>
                I’ve worked a lot in teams before, which I like, but I also really
                enjoy putting my headphones on and just spending hours on my own
                creating new things. I need to feel needed and valued at my
                workplace, and love to take responsibility. I would say that I am a
                fair and good leader, and I've been lucky enough to take charge in
                previous jobs and projects.
              </p>
            </div>

            <div className="text about-section-card">
              <h2>On a personal note</h2>
              <p>
                When I'm not glued to the screen, I need to be creative or deal with
                a new task, to be happy. That's why I really enjoy interior design,
                analyzing numbers and understanding different markets, everything
                from beauty and retail - to health and real estate. I love my little
                family that is growing, especially our 10 year old adopted cat named
                Tussi, that is deaf, sick, wobbly, but extremely precious.
              </p>
            </div>
          </div>

          <div className="about-purpose-section">
            <h2>What's the purpose of this website?</h2>
            <p>
              I am actually an educated UX Designer, but I absolutely love frontend
              development and building websites. Instead of using a boring template,
              I decided to build this site to teach myself React and become a better
              developer. It’s under construction and will improve over time (I even
              want to add some back-end solutions later to move towards
              full-stack!). For me, having a UX background is a huge advantage when
              coding, as I love finding the actual problems, understanding the
              users, and creating better solutions.
            </p>
          </div>
        </div>

        <aside className="about-profile-column" aria-label="Profile and contact">
          <div className="image about-profile-frame">
            <img
              className="about-profile-image"
              src={maiken}
              alt="Maiken in 2025"
            />
          </div>

          <div className="about-contact-card">
            <h3>Quick contact</h3>
            <p>Email: maikenjed@hotmail.com</p>
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

          <div className="about-skill-chips">
            <h3>Core skills</h3>
            <div className="about-skill-chips-row">
              <span>UX Design</span>
              <span>Agile Framework</span>
              <span>Interaction Design</span>
              <span>Figma</span>
              <span>Wireframing</span>
              
            </div>
            <div className="about-skill-chips-row">
              <span>User Research</span>
              <span>User Testing</span>
              <span>Prototyping</span>
              <span>Information Architecture</span>
              <span>Scrum</span>
              <span>UI Design</span>
              
            </div>
            <div className="about-skill-chips-row">
              <span>Design Systems</span>
              <span>Accessibility (WCAG)</span>
              <span>React</span>
              <span>AI-Assisted Design</span>
              <span>Frontend Development</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
