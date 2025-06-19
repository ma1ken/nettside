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
          <p className="center">
            Click on a card to read more about one of the jobs I've had in my
            life
          </p>

          {/* HER SER VI KORTENE */}
          <div className="cards-container">
            
            <NavLink to="/EarlierJobs/Ikea" className="card">
              {/* <img src="/images/ikea.jpg" alt="IKEA" /> */}
              <h2>IKEA</h2>
              <p>
                Costumerservice, play-area for children and order-pickup
                coordination and logistics{" "}
              </p>
            </NavLink>

            <NavLink to="/EarlierJobs/FredrikLouisa" className="card">
              {/* <img src="/images/fredriklouisa.jpg" alt="Fredrik og Louisa" /> */}
              <h2>Fredrik & Louisa</h2>
              <p>
                Counter Manager and performing perfonalized beauty services for
                costumers
              </p>
            </NavLink>

            <NavLink to="/EarlierJobs/thebodyshop" className="card">
              {/* <img src="/images/fredriklouisa.jpg" alt="Fredrik og Louisa" /> */}
              <h2>The Body Shop</h2>
              <p>
                A job during the pandemic, after I finished my makeup studies.
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
