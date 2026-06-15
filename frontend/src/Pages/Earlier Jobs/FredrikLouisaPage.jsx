import "../../Styles/Pages.css";
import fredrikoglouisaLogo from "../../Images/fredrikoglouisa-logo.jpg";
import moltonbrownLogo from "../../Images/moltonbrown-logo.jpg";
import labruketLogo from "../../Images/labruket-logo.png";
import kiehlsLogo from "../../Images/kiehls-logo.jpg";

export default function FredrikLouisaPage() {
  return (
    <div className="content-container">
      <h1>Fredrik og Louisa 2021-2025</h1>
          <p>Premium Department Store | Brand Ambassador & Counter Manager</p>
      <div className="text-image-section">
        <div className="text">
          <p>
            Timeline: Started 3 months prior to pursuing a Bachelor’s Degree at
            Kristiania University College.
            <br />
            <br />
            This was my third job after The Body Shop, and it’s honestly where
            I’ve gained the most valuable experience so far. It’s the place
            where I really learned to connect my UX designer skills with my
            everyday work. Since it’s a major department store, you don't just
            stay at your own counter—you work across the whole store, guiding
            customers through all the different brands. It taught me how to talk
            to people, understand their needs, and map out a great customer
            experience.
          </p>
        </div>
        <div className="image">
          <img src={fredrikoglouisaLogo} alt="Fredrik og Louisa Logo" />
        </div>
      </div>

      <h2>Molton Brown 20% Ambassador</h2>
      <div className="text-image-section">
        <div className="image">
          <img src={moltonbrownLogo} alt="Molton Brown Logo." />
        </div>
        <div className="text">
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
          <p>
            After working for Molton Brown for two years, I was offered a 40%
            position for L:A Bruket. They also focus on bodycare mainly and
            natural ingredients, but also skincare. I was able to work as much
            as possible next to my studies in this position, and I represented
            the brand for around 9 months.
          </p>
        </div>
        <div className="image">
          <img src={labruketLogo} alt="Logo of La Bruket." />
        </div>
      </div>
      <div>
        <h2>Gen-Z Area 40%</h2>
        <p>
          L:A Bruket was no longer going to have their own large counter at our
          store anymore, so I was offered a position in the Gen-z Area. This
          area had brands like Cosrx, Anastasia Beverly Hills, Sol De Janeiro
          etc. I shared the area and responsibilities with another coworker. The
          whole area was surrounded by popular makeupbrands for the younger
          generation, and I was finally able to use my makeupskills daily on
          clients. It was the most busy area in the whole store, next to brands
          like Fenty Beauty and Mac Cosmetics.
        </p>
      </div>

      <div className="text-image-section">
        <div className="text">
          <h2>Kiehl's Counter Manager 80%</h2>
          <p> coming soon...</p>
        </div>
        <div className="image">
          <img src={kiehlsLogo} alt="Kiels Logo." />
        </div>
      </div>

      {/* <div>
        <h1>SKills</h1>
      </div> */}

      <div>
        <h2>Other Experience and Appreciation</h2>
        <p>
          I gained more experience with skincare and fragrance after I started
          working there, considering that I am a certified makeup-artist and had
          previously worked at The Body Shop. I was extremely lucky to be a part
          of this industry for years. The brands gave us a lot of opportunities
          for grown and to learn more about their products through trips and
          courses, for free with meals and gifts. This gave me the change to try
          products before selling them, so I could give an honest review to the
          costumers. It also opened my senses to fragrance that I did not like
          before I started working there. Now, I am able to understand and
          respect the art of creating perfumes and how its done, and smell how
          they are build up by different oils and notes. I also worked along
          side strong and powerful coworkers that showed me how much you can get
          rewarded for hard work, and I've gained so much knowledge and
          understanding about humans after working here.
        </p>
      </div>
    </div>
  );
}
