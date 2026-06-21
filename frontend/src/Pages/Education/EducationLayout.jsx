import "../../Styles/Pages.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Cards.css"; //

export default function EducationLayout() {
  const location = useLocation();
  const onMainPage = location.pathname === "/Education";

  return (
    <div className="content-container">
      {onMainPage ? (
        <>
          <h1>Education</h1>
          <h2 className="center">
            Explore my degrees and certifications:
          </h2>

          <div className="cards-container">
            <NavLink to="/Education/Bachelor" className="card">
              {/* <img src="/images/bachelor.jpg" alt="Bachelor" /> */}
              <h3>Bachelor’s Degree Interactive Design (2021-2024)</h3>
              <p>
                A comprehensive Bachelor's degree bridging technology and user
                experience design.
              </p>
            </NavLink>

            <NavLink to="/Education/MakeupDegree" className="card">
              {/* <img src="/images/makeup.jpg" alt="Makeup Degree" /> */}
              <h3>Makeup Artistry Certification (2019-2020)</h3>
              <p>
                A professional qualification as a Certified Beauty Makeup
                Artist, specializing in editorial and commercial techniques.
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
