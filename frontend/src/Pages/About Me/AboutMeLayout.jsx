import "../../Styles/Pages.css";
import "../../Styles/AboutMeLayout.css";
import "../../Styles/Cards.css";
import maiken from "../../Images/maiken1_2025.jpg";

export default function AboutMeLayout() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text about-intro-text">
          <h1>Hi, I'm Maiken!</h1>
          <p>
            Welcome to my website! To be honest, it’s a bit of a work in
            progress right now (and a little messy!), but hopefully, you’ll find
            your way to my portfolio and learn a bit more about me. Right now,
            I’m living in Oslo and interested in a full time job as a developer,
            ui/ux-desinger.
          </p>

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
            <div className="about-skill-chips-row">
              <span>UX Design</span>
              <span>UI Design</span>
              <span>Interaction Design</span>
              <span>Figma</span>
            </div>
            <div className="about-skill-chips-row">
              <span>User Research</span>
              <span>User Testing</span>
              <span>Prototyping</span>
              <span>Information Architecture</span>
            </div>
            <div className="about-skill-chips-row">
              <span>Design Systems</span>
              <span>Accessibility (WCAG)</span>
              <span>React</span>
              <span>AI-Assisted Design</span>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={maiken} alt="Maiken in 2025" />
        </div>
      </div>

      <div className="double-text-section">
        <div>
          <h2>How I work</h2>
          <p>
            I’ve worked a lot in teams before, which I like, but I also really
            enjoy putting my headphones on and just spending hours on my own
            creating new things. I need to feel needed and valued at my
            workpalce, and love to take responsibility. I would say that I am a
            fair and good leader, and I've been lucky enough to take charge in
            previous jobs and projects.
          </p>
        </div>

        <div>
          <h2>On a personal note</h2>
          <p>
            When I'm not glued to the screen, I need to be creative or deal with
            a new task, to be happy. Thats why I really enjoy interior deisgn,
            analyzing numbers and understanding different markets, everything
            from beauty and retail - to health and real estate. I love my little
            family that is growing, especially our 10 year old adopted cat named
            Tussi, that is deaf, sick, wobbly, but extremely precious.
          </p>
        </div>
      </div>

      <div>
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
  );
}
