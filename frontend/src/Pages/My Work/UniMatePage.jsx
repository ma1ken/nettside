import "../../Styles/Pages.css";
import unimateLogo from "../../Images/unimateLogo.png";

export default function UniMatePage() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <h1>Hi, I'm Maiken!</h1>
          <p>
            A mobile app concept I designed for my DS4800 Innovation and
            Prototyping exam back in 2023. It’s built to cure campus app fatigue
            and student loneliness by killing the high interaction cost of
            fragmented university channels and combining them with hobby-driven
            networking, helping students manage their crazy academic schedule
            while organically finding their crowd from day one.
            <h2>GRADE: B</h2>
          </p>
        </div>
        <div className="image, image-crop">
          <img src={unimateLogo} alt="AI generated Logo of the uniMate app" />
        </div>
      </div>
    </div>
  );
}
