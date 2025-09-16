import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Pages.css";
import "../../Styles/Cards.css"; // Bruk samme kortdesign her

export default function MyWorkLayout() {
  const location = useLocation();
  const onMainPage = location.pathname === "/MyWork";

  return (
    <div className="content-container">
      {onMainPage ? (
        <>
          <h1>My Projects</h1>
          <p className="center">
            Here you'll find some information about my earlier projects. Choose
            a card to read more about the chosen project:
          </p>

          <div className="cards-container">
            <NavLink to="/MyWork/UInMunch" className="card">
              {/* <img src="/images/uinmunch.jpg" alt="UInMunch" /> */}
              <h2>U In Mnch</h2>
              <p>
                Developed an Interactive App-Idea and Prototype for the Munch
                Museum, In an attempt to attract more teenagers.
              </p>
            </NavLink>

            <NavLink to="/MyWork/Eld" className="card">
              {/* <img src="/images/eld.jpg" alt="Eld" /> */}
              <h2>Eld</h2>
              <p>
                Create a Bridge between lonely Teenagers and Elderly. An Exam in
                the subject "Designproject".
              </p>
            </NavLink>

            <NavLink to="/MyWork/Animations" className="card">
              {/* <img src="/images/eld.jpg" alt="Eld" /> */}
              <h2>Animations</h2>
              <p>
                Animations I created during my bachelor for submussions in
                differnet subjects.
              </p>
            </NavLink>

             <NavLink to="/MyWork/Cafe" className="card">
              {/* <img src="/images/eld.jpg" alt="Eld" /> */}
              <h2>Cafe App</h2>
              <p>
               Cafe App I created the third semester of my bachelor
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
