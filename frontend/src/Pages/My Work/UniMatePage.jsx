import "../../Styles/Pages.css";
import unimateLogo from "../../Images/unimateLogo.png";
import unimatePersona1 from "../../Images/unimate/extracted/p19_xref86.jpeg";
import unimatePersona2 from "../../Images/unimate/extracted/p19_xref87.jpeg";
import unimatePersona3 from "../../Images/unimate/extracted/p20_xref90.jpeg";
import unimatePersona4 from "../../Images/unimate/extracted/p20_xref91.jpeg";
import unimatePersona5 from "../../Images/unimate/extracted/p21_xref94.jpeg";
import unimateUIKit from "../../Images/unimate/extracted/p24_xref104.png";
import unimateTemplate from "../../Images/unimate/extracted/p25_xref112.png";
import unimateAuth1 from "../../Images/unimate/extracted/p26_xref115.jpeg";
import unimateAuth2 from "../../Images/unimate/extracted/p26_xref116.jpeg";
import unimateOnboarding1 from "../../Images/unimate/extracted/p27_xref119.jpeg";
import unimateOnboarding2 from "../../Images/unimate/extracted/p27_xref120.jpeg";
import unimateOnboarding3 from "../../Images/unimate/extracted/p27_xref121.jpeg";
import unimateApp1 from "../../Images/unimate/extracted/p28_xref124.jpeg";
import unimateApp2 from "../../Images/unimate/extracted/p29_xref127.jpeg";
import unimateApp3 from "../../Images/unimate/extracted/p29_xref128.jpeg";
import unimateApp4 from "../../Images/unimate/extracted/p30_xref131.jpeg";
import unimateApp5 from "../../Images/unimate/extracted/p30_xref132.jpeg";
import unimateApp6 from "../../Images/unimate/extracted/p31_xref135.jpeg";
import unimateApp7 from "../../Images/unimate/extracted/p31_xref136.jpeg";

export default function UniMatePage() {
  return (
    <div className="content-container my-work-page">
      <h1>UniMate</h1>
      <div className="gap"></div>

      <div className="text-image-section unimate-intro-section">
        <div className="text">
          <p className="grade">
            Grade: B | DS4800 Innovation &amp; Prototyping | Fall 2023
          </p>
          <p>
            UniMate started as a group exam project where we wanted to solve two
            real student problems we had experienced ourselves: fragmented
            school information across too many platforms, and social isolation
            when entering a new study environment. We designed a mobile concept
            in Figma that brings study guidance, communication, and
            interest-based networking into one place. The goal was to reduce
            interaction cost in student life while building a stronger sense of
            belonging from day one.
          </p>
        </div>
        <div className="image image-crop">
          <img src={unimateLogo} alt="AI generated logo of the UniMate app" />
        </div>
      </div>

      <div className="section-color">
        <h2>Problem understanding and innovation approach</h2>
        <p>
          In this project I worked with ideation, concept development, UX
          architecture, prototyping, and user testing. We used association
          methods like SCAMPER, observation of users and existing services,
          persona development, sketching, and iterative design in Figma.
          Instead of jumping directly into visuals, we started with pain points
          and user needs, then translated those into concrete feature
          priorities.
        </p>
        <p>
          One important part was defining clear target groups. We worked with
          future students, current students, and guidance roles to understand
          different needs in the same system. This gave us better
          decision-making when planning onboarding, navigation, and
          communication flows. It also strengthened my ability to think in
          systems, not just single screens.
        </p>

        <h2>Personas we built</h2>
        <p>
          To keep the solution grounded in real student needs, we created five
          personas with different goals, motivations, and digital habits. This
          helped us prioritize what to simplify, what to highlight, and what to
          postpone. Seeing the target users side by side made our UX decisions
          much stronger through the whole process.
        </p>
        <div className="unimate-image-grid unimate-grid-personas">
          <img src={unimatePersona1} alt="UniMate persona 1" />
          <img src={unimatePersona2} alt="UniMate persona 2" />
          <img src={unimatePersona3} alt="UniMate persona 3" />
          <img src={unimatePersona4} alt="UniMate persona 4" />
          <img src={unimatePersona5} alt="UniMate persona 5" />
        </div>
      </div>

      <div>
        <h2>My role and skills I used</h2>
        <p>
          I contributed across the full process, from concept framing to
          usability evaluation. I worked actively with user-centered design,
          information hierarchy, interaction patterns, and early validation.
          Through this project I practiced turning broad ideas into structured
          UX decisions, and documented why each feature existed from a user
          value perspective.
        </p>
        <p>
          Key competencies I developed here: design research, service thinking,
          prototyping in Figma, test planning, insight analysis, and iterative
          improvement. I also improved my collaboration skills by working with
          shared methods and aligning ideas from different people into one
          consistent product concept.
        </p>
      </div>

      <div className="section-color">
        <h2>Prototype and UX structure</h2>
        <p>
          We built the complete prototype in Figma, starting with reusable
          templates for components, colors, and buttons to keep consistency
          across screens. A lot of attention went into first-time user flow:
          login, registration, profile setup, and personalized content after
          onboarding. The navigation was designed to be simple and predictable,
          with clear paths to hobbies, studies, inbox, and profile.
        </p>
        <p>
          We also designed for trust and clarity in registration by using a
          verified setup flow. The intention was to support safer communication
          and reduce noise in academic spaces. From a UX perspective, this was
          a balance between accessibility, friction, and control.
        </p>

        <div className="unimate-image-grid unimate-grid-wide">
          <img src={unimateUIKit} alt="UniMate UI kit and component setup" />
          <img src={unimateTemplate} alt="UniMate template setup in Figma" />
        </div>

        <h2>Authentication and onboarding flow</h2>
        <p>
          Below are the actual app screens from the prototype, including login,
          registration, and onboarding choices. We focused on clear actions,
          visual feedback, and simple progression for first-time users.
        </p>
        <div className="unimate-image-grid unimate-grid-phones">
          <img src={unimateAuth1} alt="UniMate login screen" />
          <img src={unimateAuth2} alt="UniMate registration screen" />
          <img src={unimateOnboarding1} alt="UniMate onboarding screen one" />
          <img src={unimateOnboarding2} alt="UniMate onboarding screen two" />
          <img
            src={unimateOnboarding3}
            alt="UniMate onboarding screen three"
          />
        </div>

        <h2>Main app screens and navigation</h2>
        <p>
          These are core screens from the app itself. This is where we tested
          navigation clarity, content hierarchy, and how users move between
          social and study-related features.
        </p>
        <div className="unimate-image-grid unimate-grid-phones">
          <img src={unimateApp1} alt="UniMate app main screen one" />
          <img src={unimateApp2} alt="UniMate app main screen two" />
          <img src={unimateApp3} alt="UniMate app main screen three" />
        </div>
        <div className="unimate-image-grid unimate-grid-phones">
          <img src={unimateApp4} alt="UniMate app flow screen four" />
          <img src={unimateApp5} alt="UniMate app flow screen five" />
          <img src={unimateApp6} alt="UniMate app flow screen six" />
          <img src={unimateApp7} alt="UniMate app flow screen seven" />
        </div>
      </div>

      <div className="section-color">
        <h2>Usability testing and what we learned</h2>
        <p>
          We ran usability testing with 5 participants and got very positive
          feedback on the overall concept and potential. The test gave us
          practical insight into what should be prioritized first, and where
          the prototype still created confusion. This phase improved my skills
          in observation, interview follow-up, and identifying patterns in user
          feedback.
        </p>
        <p>
          The strongest finding was that users wanted even more social value,
          especially hobby-focused features and friendship building, not only
          school information. That challenged our initial assumptions and
          changed the direction of feature prioritization. We also found
          smaller UX issues around settings flow, profile editing expectations,
          and visibility of contact actions.
        </p>

        <h2>Iteration and improvements</h2>
        <p>
          Based on testing, we identified concrete improvements such as clearer
          profile editing interactions, better language support, and stronger
          feature visibility for social functions. We also explored future
          ideas like better community matching, communication tools, and
          clearer study overview modules. This project taught me how to move
          from concept to evidence-based iteration, which is one of the most
          important skills I use in UX work today.
        </p>

        <h2>What this project taught me</h2>
        <p>
          This exam really leveled up my skills in user-centered design,
          prototyping, and insight-driven iteration. It made me better at
          translating research and test findings into clear UX decisions, and
          it gave me stronger confidence in presenting both design rationale
          and critical reflection. UniMate is still one of my favorite concepts
          because it combines practical utility, social impact, and a very real
          student need.
        </p>
      </div>
    </div>
  );
}
