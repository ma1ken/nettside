import "../../Styles/Pages.css";
import fredrikoglouisaLogo from "../../Images/fredrikoglouisa-logo.jpg";
import moltonbrownLogo from "../../Images/moltonbrown-logo.jpg";
import labruketLogo from "../../Images/labruket-logo.png";
import kiehlsLogo from "../../Images/kiehls-logo.png";

export default function FredrikLouisaPage() {
  return (
    <div className="content-container fredrik-page">
      <h1>Fredrik og Louisa 2021-2025</h1>
      <div className="text-image-section fredrik-intro-section">
        <div className="text">
          <h2>Premium Store | Brand Ambassador & Counter Manager</h2>

          <p>
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
          <img
            className="fredrik-intro-logo"
            src={fredrikoglouisaLogo}
            alt="Fredrik og Louisa Logo"
          />
        </div>
        <div classname="gap"></div>
      </div>
      <div className="section-color"></div>
      <h2>My Journey & The Brands I Represented</h2>
      <div className="gap"></div>
      <div className="text-image-section fredrik-molton-section">
        <div className="image">
          <img
            className="fredrik-brand-logo"
            src={moltonbrownLogo}
            alt="Molton Brown Logo."
          />
        </div>
        <div className="text">
          <h3>Molton Brown (20% Ambassador)</h3>
          <p>
            A brand I was very happy with, and a really good jump from The Body
            Shop. Their values aligned a lot with mine, and I felt proud to sell
            these products. I had direct contact with the brand’s headquarters
            in Sweden, following their exact routines and handling the
            administrative work and counter representation. I didn't just guide
            customers; I also trained and led my co-workers through the brand's
            unique products and routines.
          </p>
        </div>
      </div>
      <div className="gap"></div>
      <div className="text-image-section fredrik-labruket-section">
        <div className="text">
          <h3>L:A Bruket (40% Ambassador)</h3>
          <p>
            After working for Molton Brown for two years, I was offered a 40%
            position here. They focus on natural ingredients, body care, and
            skincare. I held this role for about 9 months, working as much as
            possible alongside my full-time university studies.This is where I
            really started diving deeper into natural skincare routines, helping
            clients find products tailored to their skin.
          </p>
        </div>
        <div className="image">
          <img
            className="fredrik-brand-logo"
            src={labruketLogo}
            alt="Logo of La Bruket."
          />
        </div>
      </div>
      <div className="fredrik-genz-section">
        <div className="gap"></div>

        <h3>Gen-Z Area 40%</h3>
        <p>
          When the store remodeled and L:A Bruket no longer had a large counter,
          I was offered a spot in the Gen-Z area. It was the busiest spot in the
          store, right next to MAC and Fenty Beauty. I shared responsibility for
          a massive area filled with popular brands like Cosrx, Anastasia
          Beverly Hills, and Sol De Janeiro. As a certified makeup artist, I
          absolutely loved this role because I was finally able to use my makeup
          skills every day on real clients.
        </p>
      </div>
      <div className="text-image-section fredrik-kiehls-section">
        <div className="text">
          <h3>Kiehl's Counter Manager 80%</h3>
          <p>
            Stepping up to an 80% position as a Counter Manager for Kiehl's was
            a huge and exciting next step. Kiehl's is all about high-quality
            skincare and education, which meant taking on a lot more trust and
            leadership. I was not only responsible for sales, but also for
            building routines, supporting the team, and making sure every client
            got a consultation that felt personal and professional. This role
            pushed me to combine product knowledge, communication, and structure
            every single day.
          </p>
        </div>
        <div className="image">
          <img
            className="fredrik-kiehls-logo"
            src={kiehlsLogo}
            alt="Kiehls Logo."
          />
        </div>
      </div>
      <br />
      <br />
      <div className="double-text-section">
        <div classname="text">
          <h4>Running the Business</h4>
          <p>
            I was responsible for the daily life of the counter—managing stock
            levels, ordering products, keeping everything looking clean and
            organized, and making sure we hit our sales goals.
          </p>
        </div>
        <div>
          <h4>Deep Consultations</h4>
          <p>
            Kiehl's is famous for its intensive skin consultations. I learned to
            do deep skin-analyses, figuring out exactly what a customer's skin
            barrier needed and teaching them how ingredients work.{" "}
          </p>
        </div>
      </div>
      <div className="double-text-section">
        <div classname="text">
          <h4>Team Leadership</h4>
          <p>
            I managed the shift schedules, coordinated with brand reps, and
            coached my co-workers so everyone felt confident talking about the
            brand.
          </p>
        </div>
        <div>
          <h4> The UX Connection:</h4>
          <p>
            This role was pure UX in real life. I had to organize the physical
            space so it was easy to navigate, solve daily layout/operational
            problems, and figure out how to make a customer’s journey at our
            counter as smooth and educational as possible.
          </p>
        </div>
      </div>
      {/* <div>
        <h1>SKills</h1>
      </div> */}
      <div className="section-color"></div>'
      <div>
        <h2>What This Experience Taught Me</h2>
        <p>
          The Art of Fragrance: I gained so much experience with fragrance here.
          Before this job, there were scents I didn't like at all, but now I
          completely understand and respect the art of making perfumes. I can
          actually smell how they are built up by different oils, top notes, and
          base notes. Honest Reviews: We were incredibly lucky to get free
          trips, courses, meals, and gifts from the brands. This gave me the
          chance to try everything before selling it. Because of that, I could
          always give an honest, authentic review to my customers, which built a
          lot of trust. Human Insights: I worked alongside some seriously strong
          and powerful co-workers who showed me how much you can get rewarded
          for hard work. Most of all, interacting with thousands of different
          people gave me a deep understanding of human behavior—which is the
          most valuable asset I can bring into my UX career.
        </p>
      </div>
    </div>
  );
}
