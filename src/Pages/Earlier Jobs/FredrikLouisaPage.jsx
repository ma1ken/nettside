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
          <h1>Fredrik og Louisa</h1>

          <p>
            My third job that I started working at after The Bodyshop. This is
            the job where I've gained most valueable experience that I can use
            in other jobs, and I learned to connect my UX designer skills with
            my work.
            <br />
            <br />I started working here three months before I started my
            bachelors degree at Kristiania. This was a department store, where
            you usually represent a brand. I had the honor to represent Molton
            Brown, L:A Bruket, Kiehl's Cosmetics and a few other brands. You
            work at the whole store, so you have to guide the costumers through
            all brands and not only your own.
          </p>
        </div>
        <div className="image">
          <img src={fredrikoglouisaLogo} alt="Fredrik og Louisa Logo" />
        </div>
      </div>

      <div className="text-image-section">
        <div className="image">
          <img src={moltonbrownLogo} alt="Molton Brown Logo." />
        </div>
        <div className="text">
          <h2>Molton Brown 20% Ambassador</h2>
          <p>
            A brand that I was very happy with, and a good jump from The Body
            Shop. I quickly learnt the products and routines and was very happy
            and proud to sell these products, as their values aligned alot with
            The Body Shop and mine.
            <br />
            <br />
            The first Counter I worked at. I shared the counter with another
            colleage, but I had the main responsibility. We were both students
            and worked two times a week each to guide costumers and other
            co-workers through the brand. I had direct contact with the brand
            from sweden and followed their routines and structure with
            representation and administrative work.
          </p>
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
        <h1>SKills</h1>
      </div>

      <div>
        <h2>Other Experience and Appreciation</h2>
      </div>
    </div>
  );
}
