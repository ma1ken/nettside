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
          <h2 className="center">
            Explore a selection of my projects, including graded university work and independent design concepts. Click any card to read the full case study:
          </h2>

          <div className="cards-container">
            <NavLink to="/MyWork/UInMunch" className="card">
              {/* <img src="/images/uinmunch.jpg" alt="UInMunch" /> */}
              <h3>U In Mnch</h3>
              <p>
                How do you make museums appealing to teens? This project tackles
                that challenge with an interactive prototype for the Munch
                Museum.
              </p>
              <br />
              <p>GRADE: B</p>
            </NavLink>

            <NavLink to="/MyWork/Eld" className="card">
              {/* <img src="/images/eld.jpg" alt="Eld" /> */}
              <h3>Eld</h3>
              <p>
                Created as a major exam project, this concept designs a platform
                to combat loneliness by connecting youth with senior citizens.
              </p>
              <br />
              <p>GRADE: A</p>
            </NavLink>

            <NavLink to="/MyWork/Cafe" className="card">
              {/* <img src="/images/eld.jpg" alt="Eld" /> */}
              <h3>Cafe App</h3>
              <p>
                A deep dive into mobile UX and interface design, built from
                scratch as part of my third-semester curriculum.
              </p>
              <br/>
              <p>GRADE: B</p>
            </NavLink>
            <NavLink to="/MyWork/Animations" className="card">
              {/* <img src="/images/eld.jpg" alt="Eld" /> */}
              <h3>Animations</h3>
              <p>
                A creative showcase of motion design assignments developed to
                satisfy different academic briefs during my degree.
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
