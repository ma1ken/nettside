import "../../Styles/Pages.css";
import hkLogo from "../../Images/hk-logo.png";

export default function BachelorPage() {
  return (
    <div className="content-container">
      <h1>Bachelor’s Degree in IT – Interactive Design</h1>

      <div className="text-image-section">
        <div className="text">
          <p className="education-meta">Høyskolen Kristiania, 2021–2024</p>
          <p>
            I completed a three-year Bachelor at Høyskolen Kristiania in the
            IT-Interactive Design program. One of my motivations for this
            program was my early interest in web design and CSS. During this
            time, I developed strong problem-solving skills, technical
            confidence, and a user-centered mindset.
          </p>
        </div>

        <div className="image">
          <img
            className="logo-intro-image"
            src={hkLogo}
            alt="Høyskolen Kristiania logo"
          />
        </div>
      </div>

      <div className="section-color">
        <h2>Core Curriculum and Skills</h2>

        <div className="double-text-section">
          <div className="text">
            <h3>Programming, Web Technologies, and Agile Collaboration</h3>
            <p>
              Even though we specialized in UX, we had many of the same subjects
              as other IT programs. We worked with JavaScript, HTML5, CSS, and
              React, and also covered Java, information technology and security,
              animation, and databases. This gave us flexibility across both
              design and development disciplines. The program also strengthened
              my collaboration skills through agile team projects, where we used
              tools like Miro and Scrum practices to structure work, plan
              timelines, and deliver results effectively.
            </p>
          </div>

          <div className="text">
            <h3>UX, UI, and Visual Communication</h3>
            <p>
              Through the program, I planned and executed user tests, analyzed
              findings, created user stories and personas, and built wireframes
              and prototypes in Figma. This helped me validate ideas and improve
              solutions based on actual user feedback. I also developed a
              sharper eye for visual quality and usability, with a strong focus
              on accessibility and WCAG so designs are both effective and
              inclusive.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>Practical Experience and Summary</h2>
        <p>
          I applied UX methods in my previous retail role, where I used user
          psychology and segmentation to better understand customer needs. I
          also kept improving my frontend skills in React, and this portfolio
          has been one of the ways I have turned academic learning into
          practical work. This degree gave me a strong foundation in both UX and
          development. It helped me grow from curiosity to confidence, and
          confirmed that I enjoy building digital solutions that combine user
          needs, structure, and visual clarity.
        </p>
      </div>
    </div>
  );
}
