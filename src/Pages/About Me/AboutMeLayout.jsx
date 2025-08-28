import "../../Styles/Pages.css";
import "../../Styles/AboutMeLayout.css";
import "../../Styles/Cards.css";
import kobenhavn from "../../Images/kobenhavn.jpg";
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
            Hello traveller. Welcome to this extremely messy page where I will
            show you either how interesting I am, or you're actually here for my
            portfolio (I am working on it, some is where but more is on its way.
            It just takes a damn long time to apply for jobs, fix this page,
            take care of myself and my hobbies ++++ I m currently laying down
            new floor in my whole apartment and painting all the rooms).
          </p>
          <p>
            A few facts about me to get started. I am 27 years old and I live in
            Oslo. You would think that should give me a lot of joboppurtinities,
            which it does, but not a lot of jobs or interviews. So please, take
            ur time and appreciate that it takes a while to build this page,
            though its far from done. I really like to draw, change my home all
            the time, connect with nature, animals and knitting. Ive been a
            gamer forever, but I dont have time anymore and I get way to
            addicted when Im playing, so I think that time has passed. I like to
            talk about gaming and watch other people play still tho. :D
          </p>
        </div>

        <div className="image">
          <img
            src={kobenhavn}
            alt="An image of me in Copenhagen this summer 2025."
          />
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
          <h2>
            THIS IS NOT DONE, BUT I JUST HAD TO PUSH OUT SOME CHANGES ABOUT ME
            ON THIS PAGE (IT WAS AN EMERGENCY) AND I REALLY NEED TO PEE AND
            SLEEP. SO THE BUTTONS UNDERNEATH DOES NOT WORK ATM, BUT THEY WILL
            SOON.
          </h2>
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
