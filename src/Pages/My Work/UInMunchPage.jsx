import "../../Styles/Pages.css";
import uinmnchLogo from "../../Images/uinmnch-logo.png";
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
          <img src={uinmnchLogo} alt="U In MNCH Logo" />
        </div>
      </div>
        <h2>Page still under conctruction..</h2>
    </div>
  );
}
