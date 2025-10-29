import "../../Styles/Pages.css";
import "../../Styles/MakeupDegree.css";
import makeupArtist from "../../Images/makeup-artist.png";
export default function MakeupDegreePage() {
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <h1>
            Makeup Degree
            <br />
            Tone Lise Akademiet
          </h1>
          <h2>
            I completed my degree as a beauty makeup artist, which took place
            from 08/2019 to 01/2020.
          </h2>
          <p>
            Makeup has been a big interest ever since I've been a kid, and I
            wasn't old when I started to steal my mothers makeup. When I got my
            first camera at the age of 9, I started recording makeupvideoes and
            post them online (fortunately, they don't exist anymore). I never
            lost interest in it, and I decided to join Tone Lise Akademiet in
            2019, to finally become a certified Beauty Makeup-Artist.
          </p>
        </div>
        <div className="image">
          <img src={makeupArtist} alt="Cartoon holding makeup-equipment" />
        </div>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <h2>Theory of Beauty and Artistry through History</h2>
        <p>
          There are different types of makeup-artist. "Beauty" means standard
          makeup-artistry, where you follow techniques and trends through
          history and costumize it to your model/clients needs/wishes. If you
          have a client that wants to be a bride from the 50's, you need to know
          what techniques makes the look unique from the other decades, and
          create it according to your clients facial symmetry and wishes. During
          our training, we would go through different decades of history to see
          what kind of fashion, makeup and hair-trends were relevat. It was
          important to identify these trends in movies, and to understand how
          society and economical issues can impact beauty trends (for example,
          during the 20's, women would draw their eyebrow pointing down to the
          corners of the eye, making them look sad and depressed, to attract
          sympathy from men. There was an economic crash during the 20's, which
          caused the great depression).
          <br />
          <br />
          Our teachers would learn us about theory, then demonstrate it to us,
          before we attemted the makeup looks on eachother. It was important
          that we follow color theory and costumized colors to fit each
          skintone, eyecolor, to create harmony on the model. Sanitation was one
          of the first things we learnt, and we had to follow these rules
          everyday, as alot of us used products we had purchased for our own
          money. One you use a product and dip it back into a container without
          cleansing it, the products is destroyed. It would be very expensive if
          you bough a new kit for each model. We learnt that the clients needs
          and wishes always comes first. If a model needed a 70's makeup look,
          but dont want the bronzed glow that was popular, you have to listen to
          them, even though it does not align with theory.
        </p>
      </div>
      <div className="gap"></div>
      <div>
        <h2>How I used my Degree</h2>
        <p>
          My degree has given me the opportunity to work with models and learn
          from the best. After working in Fredrik & Louisa for 4 years, I've
          helped a lot of costumers enhance their features and feel better in
          themselves. I worked on models that wanted different styles and
          themes, from graphic liner to bride. On the floor at Fredrik & Louisa,
          you learn how to find the right shades and products for the costumers
          in a short amount of time. There are different scenarios where you
          have the time to apply and compelte makeuplooks on costumers, which
          was my favorite part of the job. You learn makeup by applying makeup,
          and I've acquired the skills to help people regardless of skincolor,
          skintype or conditions. It is a degree that has given me a lot of you
          and let me be creative, while costuimzing each look to each person.
        </p>
      </div>
    </div>
  );
}
