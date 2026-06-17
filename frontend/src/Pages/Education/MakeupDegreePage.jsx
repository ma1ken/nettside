import "../../Styles/Pages.css";
import "../../Styles/MakeupDegree.css";
import makeupArtist from "../../Images/makeup-artist.png";
export default function MakeupDegreePage() {
  return (
    <div className="content-container">
      <h1>Certified Beauty Makeup Artist</h1>
      <h2>Tone Lise Akademiet (08/2019 – 01/2020)</h2>
      <div className="text-image-section">
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
      <div className="section-color"></div>
      <div>
        <h2>Comprehensive Artistry, History, and Theory</h2>
        <p>
          The curriculum provided a deep dive into both the practical and
          intellectual sides of standard beauty artistry, with a heavy focus on
          tailoring techniques to the unique features and desires of each
          client. Key areas of my training included:
        </p>
      </div>
      <div className="double-text-section">
        <div className="text>">
          <h3>Historical Trends and Cultural Context:</h3>
          <p>
            We studied the evolution of beauty and hair trends across decades to
            understand how societal shifts and economic events (such as the
            Great Depression impacting 1920s aesthetics) influenced fashion.
            This allowed me to accurately replicate period-correct looks, such as
            a classic 1950s bridal style, while adapting the techniques to fit
            modern facial symmetry.
          </p>
        </div>
        <div className="text>">
          <h3>Sanitation and Professional Hygiene:</h3>
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
        <div className="text>">
          <h3>Color Theory and Customization:</h3>
          <p>
            I mastered advanced color theory, learning how to select and blend
            shades that harmonize perfectly with a client's specific skin tone,
            undertones, and eye color.
          </p>
        </div>
        <div className="text>">
          <h3>Client-Centric Philosophy:</h3>
          <p>
            I learned that a client's comfort and wishes always come first. Even
            when executing a specific historical or conceptual brief, true
            professionalism means adapting the theory to align with the client’s
            comfort level and personal preferences.
          </p>
        </div>
      </div>
      {/* <div className="gap"></div> */}
      <div className="section-color"></div>
      <div>
        <h2>Career Application: Artistry in Action</h2>
        <p>
          My education laid a powerful foundation that allowed me to seamlessly
          transition into high-end retail and editorial work. Over a successful
          four-year tenure at Fredrik & Louisa, I translated my academic
          knowledge into fast-paced, real-world expertise.
        </p>
      </div>
      <div className="double-text-section">
        <div className="text>">
          <h3>Diverse Clientele and Inclusivity:</h3>
          <p>
            Working directly on the retail floor, I mastered the art of rapid
            skin analysis and shade-matching. I developed the specialized skills
            required to confidently enhance features across all skin tones, skin
            types, and age demographics.
          </p>
        </div>
        <div className="text>">
          <h3>Versatile Style Execution:</h3>
          <p>
            I routinely designed and applied a vast range of styles tailored to
            specific customer requests, ranging from sharp, modern graphic
            liners to soft, flawless bridal makeup.
          </p>
        </div>
      </div>
      <h3>The Power of Transformation:</h3>
      <p>
        My favorite part of the role remains the hands-on application. This
        degree has given me the creative freedom to treat every face as a unique
        canvas, using my skills not just to apply product, but to help
        individuals enhance their natural features and leave feeling deeply
        confident.
      </p>
    </div>
    //     Exams and Practical Grading: Since you mentioned adding grades to your school projects, did you have a final practical exam or portfolio delivery? You could add a small note like: "Final Practical Exam: [Grade/Result] — Focused on [e.g., Bridal / High Fashion / Retro look]."

    // Specific Product Knowledge: Mentioning the types of brands you trained with at Tone Lise Akademiet or handled at Fredrik & Louisa (e.g., luxury brands, high-definition makeup, or airbrushing if applicable) shows strong technical familiarity.

    // Photography & Lighting Knowledge: As a makeup artist, understanding how makeup looks under different lighting (studio lights, daylight, flash photography) is a massive skill. Since you mentioned having an interest in cameras since you were 9, adding a line about “understanding makeup behavior under studio and retail lighting” bridges your two passions beautifully.
  );
}
