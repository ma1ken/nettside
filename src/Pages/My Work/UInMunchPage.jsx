import "../../Styles/Pages.css";
import uinmnchLogo from "../../Images/uinmnch-logo.png";
import uinmnchPlan from "../../Images/uinmnch-plan.png";
import uinmnchLogos from "../../Images/uinmnch-logos.png";
import uinmnchInspoLogo from "../../Images/uinmnch-inspo-logo.png";
import uinmnchFont from "../../Images/uinmnch-font.png";
import uinmnchColors from "../../Images/uinmnch-colors.png";
import uinmnchTour1 from "../../Images/uinmnchTour1.png";
import uinmnchTour2 from "../../Images/uinmnchTour2.png";
import uinmnchTour3 from "../../Images/uinmnchTour3.png";
import uinmnchTour4 from "../../Images/uinmnchTour4.png";
import uinmnchTour5 from "../../Images/uinmnchTour5.png";
export default function UInMunchPage() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <p>
            <h1>U In Mnch</h1>
            An agile project during the fourth semester of my bachelor. In a
            group of 7, our plan was to inspire the creators of the future
            Munch-app, with our own app idea. The developers were happy with our
            idea and sent us and email asking for permission to take inspiration
            from our idea, when creating their own solution. There were only
            5/35 groups chosen for this.
            <h2>GRADE: B</h2>
          </p>
        </div>
        <div className="image">
          <img src={uinmnchLogo} alt="UInMNCH Logo" />
        </div>
      </div>

      <div>
        <h2>Inspiration, ideas and concept</h2>
        <p>
          The pictures underneath shows planning we did as a group from the
          beginning, to figure out what kind of game we wanted to make. Our
          design system was set up with inspiration from different colors and
          fonts they use on the Munch Website. The designsystem and prototypes
          were created in Figma, like the images below. However, we also coded
          the final solution in android studio using kotlin and XLM, to make it
          more interactive than in figma. It was also a great learning
          experience for people that had not used either programs before, as our
          group consisted of members from three different studies/classes.
        </p>

        <div className="double-image-section">
          <img src={uinmnchPlan} alt="UInMnCH plan "></img>
          <img src={uinmnchLogos} alt="UInMnCH Logos inspiration"></img>
          <img src={uinmnchFont} alt="UInMnCH Font "></img>
        </div>
      </div>

      <div className="double-image-section">
        <img src={uinmnchInspoLogo} alt="UInMnCH inspo logo"></img>

        <img src={uinmnchColors} alt="UInMnCH Colors "></img>
      </div>
      <div>
        <h2>Tours</h2>
        <p>
          One of the goals for this project was for young people to visit, but
          also return again. Thats why we created different tours and games they
          could do, so they would return. All the tours were inspired by
          different exhibits that already exists in the museum, and with colors
          that are used by Munch on their website.
        </p>
        <div className="five-image-section">
          <img src={uinmnchTour1} alt="UInMnCH first tour description "></img>
          <img src={uinmnchTour2} alt="UInMnCH second tour description"></img>
          <img src={uinmnchTour3} alt="UInMnCH third tour description"></img>
          <img src={uinmnchTour4} alt="UInMnCH fourth tour description"></img>
          <img src={uinmnchTour5} alt="UInMnCH fifth tour description"></img>
        </div>
      </div>

      <h2>more coming asap..</h2>
    </div>
  );
}
