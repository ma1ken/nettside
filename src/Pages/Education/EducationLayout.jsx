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
          <p className="center">
            Here you'll find information about my degrees. Click on a topic to
            learn more about each degree:
          </p>

          <div className="cards-container">
            <NavLink to="/Education/Bachelor" className="card">
              {/* <img src="/images/bachelor.jpg" alt="Bachelor" /> */}
              <h2>Bachelor</h2>
              <p>A bachelor in IT and UX Design</p>
            </NavLink>

            <NavLink to="/Education/MakeupDegree" className="card">
              {/* <img src="/images/makeup.jpg" alt="Makeup Degree" /> */}
              <h2>Makeup Degree</h2>
              <p>A dregree as a Certified Beauty-Makeup Artist</p>
            </NavLink>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
