import "../../Styles/Pages.css";
import bodyshopLogo from "../../Images/bodyshop-logo.png";

export default function BodyShopPage() {
  return (
    <div className="content-container">
      <h1>The Body Shop</h1>
      <div className="text-image-section">
        <div className="text">
          <h2>Why I joined the Body Shop</h2>
          <p>
            At the beginning of 2020, freshly graduated with my makeup degree, I
            was actively seeking my entry into the highly competitive beauty
            industry. When an 80% contract opened up at The Body Shop, it felt
            like the perfect match.
            <br />
            <br />
            This was a brand I had used and loved throughout my teenage years,
            but more importantly, it was a global industry leader using its
            platform for genuine activism—championing environmental
            sustainability, animal welfare, and fair trade. Working for a
            company whose ethical values aligned so closely with my own allowed
            me to advocate for and recommend products with genuine pride and
            authenticity.
          </p>
        </div>
        <div className="image">
          <img src={bodyshopLogo} alt="Bodyshop logo" />
        </div>
      </div>
      <div className="section-color"></div>
      {/* <div className="gap"></div> */}
      <h2>Expanded Responsibilities and Administration</h2>
      <p>
        While my formal title was Beauty Consultant, I effectively operated as
        the Assistant Store Manager for a large portion of my time there. During
        the summer holiday season, I was given full operational charge of the
        boutique. My responsibilities included:
      </p>
      <div className="double-text-section">
        <div className="text">
          <h3>Boutique Operations</h3>
          <p>
            Independently managing opening and closing procedures, daily
            routines, and ensuring strict visual merchandising standards.
          </p>
        </div>
        <div className="text">
          <h3>Administrative Management</h3>
          <p>
            Compiling weekly performance reports, analyzing sales data, and
            monitoring store KPIs and targets.
          </p>
        </div>
      </div>
      <div className="double-text-section">
        <div className="text">
          <h3>BInventory Control & Logistics: </h3>
          <p>
            Maintaining full oversight of stock levels, managing product intake,
            handling discrepancies, and submitting weekly inventory orders to
            ensure optimal stock rotation.
          </p>
        </div>
        <div className="text">
          <h3>Consultative Selling</h3>
          <p>
            Conducting consultation and personalized skin-care and makeup
            recommendations based on customers' specific needs, skin types, and
            the brand's unique ingredient stories. Stepping into this level of
            responsibility so early on was a steep learning curve, but it
            rapidly built my confidence in independent retail management.
          </p>
        </div>
      </div>
      <div className="section-color"></div>

      <div>
        <h2>Crisis Management and Adaptability (The Pandemic)</h2>
        <p>
          This role was meant to be my launchpad into the beauty industry,
          specifically hired to boost cosmetics sales and perform live, in-store
          makeup demonstrations. However, in March 2020 just two weeks after I
          started, the pandemic hit, and Norway implemented strict retail and
          safety restrictions. Suddenly, physical makeup applications and
          consultations were completely banned.
          <br />
          <br />
          Though it was disappointing not to use my newly acquired makeup
          artistry skills right away, this situation forced me to become
          incredibly adaptable. I quickly shifted my focus from application to
          advanced consultative selling, focusing heavily on skincare education,
          ingredient benefits, and building rapport without physical contact.
          This resilience and ability to pivot under pressure ultimately laid a
          strong foundation for my next role at Fredrik & Louisa in 2021.
        </p>
      </div>
    </div>
  );
}
