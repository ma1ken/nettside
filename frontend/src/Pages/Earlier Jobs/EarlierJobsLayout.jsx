import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Cards.css";
import "../../Styles/Pages.css";

export default function EarlierJobsLayout() {
  const location = useLocation();
  const onMainPage = location.pathname === "/EarlierJobs";

  return (
    <div className="content-container">
      {onMainPage ? (
        <>
          <h1>Earlier Jobs</h1>
         

          {/* HER SER VI KORTENE */}
          <div className="cards-container">
            <NavLink to="/EarlierJobs/FredrikLouisa" className="card">
              {/* <img src="/images/fredriklouisa.jpg" alt="Fredrik og Louisa" /> */}
              <h3>Fredrik & Louisa (2021–2025)</h3>
              <p>
                Leading luxury beauty consultations and managing premium brand
                counters
              </p>
            </NavLink>
            <NavLink to="/EarlierJobs/thebodyshop" className="card">
              {/* <img src="/images/fredriklouisa.jpg" alt="Fredrik og Louisa" /> */}
              <h3>The Body Shop (2020–2021)</h3>
              <p>
                Navigating boutique retail management and values-driven
                consultative selling
              </p>
            </NavLink>
            <NavLink to="/EarlierJobs/Ikea" className="card">
              {/* <img src="/images/ikea.jpg" alt="IKEA" /> */}
              <h3>IKEA (2016–2019)</h3>
              <p>
                Mastering high-volume retail operations, strict safety
                protocols, and customer care
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
