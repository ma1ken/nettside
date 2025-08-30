import "../../Styles/Pages.css";
import bodyshopLogo from "../../Images/bodyshop-logo.png";

export default function BodyShopPage() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <h1>The Body Shop</h1>
          <h2>What made me start working here?</h2>
          <p>
            It was the beginning of 2020 and I had just finished my makeup
            degree, and was looking for a job in the beauty industry. I actively
            looked for available jobs in the industry, and found an 80% position
            for the next 6 months at The Body Shop.
            <br />
            <br />
            The Body Shop was a brand that I was very familiar with and had used
            alot in the past through my teenage years. It is one of the few
            giant brants that uses their platforms and following to promote
            activism agains enviromental changes, animal cruelty, slave labor
            etc. It aligned with my own values and felt very right to work with
            them, and I could be proud of the products that I recommended.
            <br />
            <br />
          </p>
        </div>
        <div className="image">
          <img src={bodyshopLogo} alt="Bodyshop logo" />
        </div>
      </div>
      <p>more info coming asap..</p>
    </div>
  );
}
