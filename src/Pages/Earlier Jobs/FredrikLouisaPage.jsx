import "../../Styles/Pages.css";
import fredrikoglouisaLogo from "../../Images/fredrikoglouisa-logo.jpg";
import moltonbrownLogo from "../../Images/moltonbrown-logo.jpg";
import labruketLogo from "../../Images/labruket-logo.png";
import kiehlsLogo from "../../Images/kiehls-logo.jpg";

export default function FredrikLouisaPage() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <h1>
            Fredrik og Louisa
            <br />
            Coming soon...
          </h1>

          <p></p>
        </div>
        <div className="image">
          <img src={fredrikoglouisaLogo} alt="Fredrik og Louisa Logo" />
        </div>
      </div>
      <div>
        <h2>What is Fredrik & Louisa?</h2>
      </div>

      <div className="text-image-section">
        <div className="image">
          <img src={moltonbrownLogo} alt="Molton Brown Logo." />
        </div>
        <div className="text">
          <h2>Molton Brown 20% Ambassador</h2>
          <p></p>
        </div>
      </div>

      <div className="text-image-section">
        <div className="text">
          <h2>L:A Bruket 40% Ambassador</h2>
        </div>
        <div className="image">
          <img src={labruketLogo} alt="Logo of La Bruket." />
        </div>
      </div>
      <div>
        <h2>Gen-Z Area 40%</h2>
      </div>

      <div className="text-image-section">
        <div className="text">
          <h2>Kiehl's Counter Manager 80%</h2>
          <p></p>
        </div>
        <div className="image">
          <img src={kiehlsLogo} alt="Kiels Logo." />
        </div>
      </div>

      <div>
        <h2>Other Experience and Appreciation</h2>
      </div>
    </div>
  );
}
