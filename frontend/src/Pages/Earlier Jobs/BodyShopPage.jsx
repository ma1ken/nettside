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
      <div>
        <h2>Responsibility</h2>
        <p>
          I was kind of an assisting store manager, even though it was not in
          the title. During the summerholiday, I was the one in charge and had
          to do weekly reports, keep up with routines and administrative work.
          This was a lot for me to handle in the beginning, but I got used to
          it. I opened and closed the shop by myself, cleaned and submintted
          orders, kept full control over our storage, assisted costumers with
          finding products suited for their needs and told them about the
          products.
        </p>
      </div>
      <div>
        <h2>The Pandemic</h2>
        <p>
          This job was temporary and it would be a great way for me to find a
          way into the beauty industry, in a city where there is a big
          competition for the best jobs. However, in march 2o20, two weeks after
          I had started, the pandemic broke out. Norway was one of the countries
          that took action and made restrictions that affected our jobs. One of
          the reasons for why I was hired was to raise the makeupsales and do
          demos on costumers, but that was no longer an option. I had just
          finised my studies and had a lot of motivation to play with makeup on
          costumers, but instead I was out of training for over a year, until I
          started working at Fredrik & Louisa 2021.
        </p>
      </div>
      <p>more info coming asap..</p>
    </div>
  );
}
