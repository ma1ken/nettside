import "../../Styles/Pages.css";
import "../../Styles/AboutMeLayout.css";
import "../../Styles/Cards.css";
import Gammelt from "../../Images/Gammelt.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function AboutMeLayout() {
  const location = useLocation();
  const onMainPage = location.pathname === "/";
  return (
    <div className="content-container">
      <div className="text-image-section">
        <div className="text">
          <h1>Hi, I'm Maiken!</h1>
          <p>
            I am a 27 year old girl living in Oslo, Norway, and I've lived here
            for the past 22 years. My childhood was on an Island called Tjøme,
            and I loved growing up there surrounded by nature and sea. Ever
            since I can remember, I've been extremely active, and I started
            gymnastics at the age of 2. Other sports I've done are handball,
            taekwondo and drill baton. However, I have not been very active the
            past ten years, but I want to become sporty again.
          </p>
          <p>
            I really enjoy gaming and I've been gaming since I was a kid. My dad
            had all sorts of games he let my sister and I play. Some of my
            favorite games from my childhood are Rayman 2 The Great Escape, Red
            Alert 2, Caesar 3. I still play a lot of videogames, but I mostly
            play CS2. I love staying at home, but I do enjoy spending time with
            friends from time to time. We usually go out eating, to concerts and
            watch movies together.
          </p>
        </div>

        <div className="image">
          <img src={Gammelt} alt="Me around ten years ago." />
        </div>
      </div>
      <p>
        I decided to build and create my own website from scratch, to improve my
        skills in React and become a better frontend developer. This website is
        under construction and will improve over time, and I will add more
        back-end solutions in the future. I am currently looking for a job and I
        want to work with Frontend and UX. I am interested in improving my
        Backend skills as well as I want to become a fullstack-developer. I
        think my UX skills gives me a strong advantage, as I am very good at
        finding and understanding problems, and look for new and better
        solutions. Previously I've worked a lot in teams, but I do really enjoy
        spending time on my own creating new solutions, and I can code for hours
        once I've started. I thrive when I learn something new everyday, and I
        like to be given responsibility once I'm comfortable.
      </p>

      {onMainPage ? (
        <>
          <h1>About Me</h1>
          <p className="center">Click on a card to read more about me:</p>

          {/* HER SER VI KORTENE */}
          <div className="cards-container">

            <NavLink to="AboutMe/Gaming" className="card">
              {/* <img src="/images/ikea.jpg" alt="IKEA" /> */}
              <h2>Gaming</h2>
              <p>
                Costumerservice, play-area for children and order-pickup
                coordination and logistics{" "}
              </p>
            </NavLink>

            <NavLink to="AboutMe/Plans" className="card">
              {/* <img src="/images/ikea.jpg" alt="IKEA" /> */}
              <h2>Plans</h2>
              <p>
                Costumerservice, play-area for children and order-pickup
                coordination and logistics{" "}
              </p>
            </NavLink>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
