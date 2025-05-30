import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Cards.css"; 
import "../../Styles/Pages.css";

export default function EarlierJobsLayout() {
    const location = useLocation();
    const onMainPage = location.pathname === "/EarlierJobs";

    return (
        <div className="layout-container">
            <main className="content">
                {onMainPage ? (
                    <>
                        <h1>Earlier Jobs</h1>
                        <p>
                            Her samler jeg informasjon om de ulike jobbene jeg har hatt. Klikk på et kort for å lese mer om erfaringene mine.
                        </p>

                        {/* HER SER VI KORTENE */}
                        <div className="cards-container">
                            <NavLink to="/EarlierJobs/Ikea" className="card">
                                {/* <img src="/images/ikea.jpg" alt="IKEA" /> */}
                                <h2>IKEA</h2>
                                <p>Kundeservice og logistikkarbeid i varehus.</p>
                            </NavLink>

                            <NavLink to="/EarlierJobs/FredrikLouisa" className="card">
                                {/* <img src="/images/fredriklouisa.jpg" alt="Fredrik og Louisa" /> */}
                                <h2>Fredrik & Louisa</h2>
                                <p>Salg, rådgivning og kundeopplevelse innen skjønnhet.</p>
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
}
