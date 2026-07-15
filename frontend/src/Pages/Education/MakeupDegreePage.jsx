import "../../Styles/Pages.css";
import "../../Styles/MakeupDegree.css";
import makeupArtist from "../../Images/makeup-artist.png";

export default function MakeupDegreePage() {
  return (
    <div className="content-container makeup-artist-page">
      <h1>Certified Beauty Makeup Artist</h1>
      <p className="education-meta">Tone Lise Akademiet (08/2019 – 01/2020)</p>

      <div className="text-image-section makeup-intro-section">
        <div className="text">
          <h2>Passion and Foundation</h2>
          <p>
            Makeup has been my defining passion for as long as I can remember.
            My creative journey began as a child sneaking into my mother's
            makeup collection, and by the age of nine, I was already using my
            very first camera to record and post beauty videos online. That
            lifelong fascination never faded. In 2019, I decided to formalize my
            passion into a career by enrolling at Tone Lise Akademiet to become
            a certified Beauty Makeup Artist.
          </p>
        </div>

        <div className="image">
          <img src={makeupArtist} alt="Cartoon holding makeup-equipment" />
        </div>
      </div>

      <div className="section-color">
        <h2>Comprehensive Artistry, History, and Theory</h2>
        <p>
          The curriculum provided a deep dive into both the practical and
          intellectual sides of standard beauty artistry, with a heavy focus on
          tailoring techniques to the unique features and desires of each
          client. Key areas of my training included:
        </p>
      </div>

      <div className="double-text-section">
        <div className="text">
          <h3>Historical Trends and Cultural Context</h3>
          <p>
            We studied the evolution of beauty and hair trends across decades to
            understand how societal shifts and economic events (such as the
            Great Depression impacting 1920s aesthetics) influenced fashion.
            This allowed me to accurately replicate period-correct looks, such
            as a classic 1950s bridal style, while adapting the techniques to
            fit modern facial symmetry.
          </p>
        </div>

        <div className="text">
          <h3>Sanitation and Professional Hygiene</h3>
          <p>
            Cleanliness and product preservation were core pillars of our daily
            routine. I was trained in strict professional sanitation protocols,
            mastering cross-contamination prevention and tool sterilization to
            protect both the client's safety and the integrity of a professional
            kit.
          </p>
        </div>
      </div>

      <div className="double-text-section">
        <div className="text">
          <h3>Color Theory and Customization</h3>
          <p>
            I mastered advanced color theory, learning how to select and blend
            shades that harmonize perfectly with a client's specific skin tone,
            undertones, and eye color.
          </p>
        </div>

        <div className="text">
          <h3>Client-Centric Philosophy</h3>
          <p>
            I learned that a client's comfort and wishes always come first. Even
            when executing a specific historical or conceptual brief, true
            professionalism means adapting the theory to align with the client’s
            comfort level and personal preferences.
          </p>
        </div>
      </div>

      <div className="section-color">
        <h2>Career Application: Artistry in Action</h2>
        <p>
          My education laid a powerful foundation that allowed me to seamlessly
          transition into high-end retail and editorial work. Over a successful
          four-year tenure at Fredrik & Louisa, I translated my academic
          knowledge into fast-paced, real-world expertise. Working directly on
          the retail floor, I mastered rapid skin analysis, precise
          shade-matching, and adaptable techniques across all skin tones, skin
          types, and age demographics.
        </p>
        <p>
          I routinely designed and applied a wide range of styles tailored to
          customer goals, from sharp modern graphic liners to soft, flawless
          bridal makeup. The part I value most is the hands-on transformation:
          treating every face as a unique canvas and using my skills not only to
          apply product, but to help people enhance their natural features and
          leave feeling deeply confident.
        </p>
      </div>
    </div>
  );
}
