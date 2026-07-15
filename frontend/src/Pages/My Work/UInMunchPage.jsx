import "../../Styles/Pages.css";
import uinmnchLogo from "../../Images/uinmnch-logo.png";
import uinmnchScreen1 from "../../Images/uinmunch/extracted/p05_xref136.jpeg";
import uinmnchScreen2 from "../../Images/uinmunch/extracted/p05_xref138.jpeg";
import uinmnchScreen3 from "../../Images/uinmunch/extracted/p06_xref141.png";
import uinmnchScreen4 from "../../Images/uinmunch/extracted/p06_xref143.jpeg";
import uinmnchScreen5 from "../../Images/uinmunch/extracted/p06_xref145.jpeg";
import uinmnchScreen6 from "../../Images/uinmunch/extracted/p07_xref147.png";
import uinmnchScreen7 from "../../Images/uinmunch/extracted/p07_xref149.jpeg";
import uinmnchScreen8 from "../../Images/uinmunch/extracted/p07_xref151.jpeg";
import uinmnchTask1 from "../../Images/uinmunch/extracted/p08_xref154.jpeg";
import uinmnchTask2 from "../../Images/uinmunch/extracted/p08_xref156.png";
import uinmnchTask3 from "../../Images/uinmunch/extracted/p08_xref158.png";
import uinmnchStory1 from "../../Images/uinmunch/extracted/p09_xref161.jpeg";
import uinmnchStory2 from "../../Images/uinmunch/extracted/p09_xref163.jpeg";
import uinmnchStory3 from "../../Images/uinmunch/extracted/p09_xref165.jpeg";
import uinmnchTask4 from "../../Images/uinmunch/extracted/p09_xref167.png";
import uinmnchEnding1 from "../../Images/uinmunch/extracted/p09_xref169.jpeg";
import uinmnchEnding2 from "../../Images/uinmunch/extracted/p10_xref186.jpeg";
import uinmnchUi1 from "../../Images/uinmunch/extracted/p34_xref254.png";
import uinmnchUi2 from "../../Images/uinmunch/extracted/p34_xref260.png";

export default function UInMunchPage() {
  return (
    <div className="content-container my-work-page uinmunch-page">
      <h1>U In MNCH</h1>
      <div className="gap"></div>

      <div className="text-image-section">
        <div className="text">
          <p className="grade">
            Grade: B | PRO202 Design Sprint Project | 2023
          </p>
          <p>
            U in MNCH was created from a case provided by MUNCH: how to engage
            young adults (18-25) through innovative technology and physical art
            interaction. In a group of 7, we designed a gamified museum
            experience where users solve clues and tasks tied to exhibitions,
            inspired by a real story related to Munchs paintings from WW2.
            Instead of passive museum browsing, our concept focused on active
            exploration, mystery-solving, and measurable engagement.
          </p>
        </div>
        <div className="image">
          <img src={uinmnchLogo} alt="U In MNCH logo" />
        </div>
      </div>

      <div className="section-color">
        <h2>Concept and product direction</h2>
        <p>
          The app concept was built around an escape-room style game inside the
          museum. Users register, select a game linked to an exhibition, and
          solve tasks that reveal story fragments. The final reward concept was
          designed to increase motivation and make users complete the full
          experience. This gave us a clear product goal: combine curiosity, art,
          and technology in a way that feels social, interactive, and memorable.
        </p>

        <h3>Registration and game selection flow</h3>
        <p>
          These screens show the first part of the journey: onboarding,
          registration, and selecting an exhibition-based game.
        </p>
        <div className="uinmunch-image-grid uinmunch-grid-phones">
          <img src={uinmnchScreen1} alt="U In MNCH app screen 1" />
          <img src={uinmnchScreen2} alt="U In MNCH app screen 2" />
          <img src={uinmnchScreen3} alt="U In MNCH app screen 3" />
        </div>

        <h3>Task and story progression</h3>
        <p>
          Here is the task flow where users solve clues, move through the
          narrative, and unlock more of the mystery.
        </p>
        <div className="uinmunch-image-grid uinmunch-grid-phones uinmunch-grid-five">
          <img src={uinmnchScreen4} alt="U In MNCH app screen 4" />
          <img src={uinmnchScreen5} alt="U In MNCH app screen 5" />
          <img src={uinmnchScreen6} alt="U In MNCH app screen 6" />
          <img src={uinmnchScreen7} alt="U In MNCH app screen 7" />
          <img src={uinmnchScreen8} alt="U In MNCH app screen 8" />
        </div>
      </div>

      <div>
        <h2>Design system and UX choices</h2>
        <p>
          During the sprint, we focused on consistency and recognizability.
          Visual decisions were based on MUNCHs own brand direction, including
          colors, typography, and icon style. We used Material Design icons and
          built reusable templates in Figma for cleaner handoff between design
          and implementation. UX priorities were simple navigation, clear visual
          hierarchy, and gamification elements like progress indicators and
          story-based progression inspired by familiar social patterns.
        </p>

        <h3>Brand direction, icons, and visual consistency</h3>
        <div className="uinmunch-image-grid uinmunch-grid-wide">
          <img src={uinmnchUi1} alt="U In MNCH icon and UI element overview" />
          <img src={uinmnchUi2} alt="U In MNCH color palette" />
        </div>
      </div>

      <div className="section-color">
        <h2>Prototype evolution</h2>
        <p>
          The prototype process started in Miro and moved to Figma, where we
          iterated from wireframe to first prototype and then to a stronger
          final concept. Based on sprint and product owner feedback, we removed
          less essential features and prioritized the main game flow. The final
          version emphasized creative tasks, a detective-guided narrative,
          reward mechanics, and a more realistic mobile user journey.
        </p>

        <h3>Task design in the prototype</h3>
        <div className="uinmunch-image-grid uinmunch-grid-phones">
          <img src={uinmnchTask1} alt="U In MNCH task screen code challenge" />
          <img src={uinmnchTask2} alt="U In MNCH task screen observation" />
          <img src={uinmnchTask3} alt="U In MNCH task screen puzzle" />
          <img src={uinmnchTask4} alt="U In MNCH task screen disclosure" />
        </div>

        <h3>Story and ending flow</h3>
        <div className="uinmunch-image-grid uinmunch-grid-phones uinmunch-grid-five">
          <img src={uinmnchStory1} alt="U In MNCH story slide 1" />
          <img src={uinmnchStory2} alt="U In MNCH story slide 2" />
          <img src={uinmnchStory3} alt="U In MNCH story slide 3" />
          <img src={uinmnchEnding1} alt="U In MNCH mystery result screen" />
          <img src={uinmnchEnding2} alt="U In MNCH rewards screen" />
        </div>
      </div>

      <div className="section-color">
        <h2>User testing and findings</h2>
        <p>
          We tested with 5 users to evaluate navigation, concept clarity, and
          engagement. Feedback was positive on design and usability, but also
          gave us clear improvements: better explanation of exhibitions and
          tasks, clearer icon meaning, and more task variety. Some users wanted
          competitive multiplayer elements and social visibility of progress,
          which supported our original direction for future development.
        </p>

        <h2>What we learned</h2>
        <p>
          This project gave me valuable experience in agile teamwork, design to
          development handoff, and balancing product owner feedback with user
          insights. One of the biggest lessons was how important planning and
          communication are when design and implementation run in parallel. It
          also strengthened my skills in iterative prototyping and feature
          prioritization under time constraints.
        </p>
      </div>
    </div>
  );
}
