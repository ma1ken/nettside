import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Sidebar.css";
import "../../Styles/Pages.css";

export default function EarlierJobsLayout() {
    const location = useLocation();
    const onMainPage = location.pathname === "/EarlierJobs";

    return (
        <div className="layout-container">
            <aside className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/EarlierJobs/Ikea">IKEA</NavLink>
                    </li>
                    <li>
                        <NavLink to="/EarlierJobs/FredrikLouisa">
                            Fredrik og Louisa
                        </NavLink>
                    </li>
                </ul>
            </aside>

            <main className="content">
                {onMainPage ? (
                    <>
                        <h1>Earlier Jobs</h1>
                        <p>
                            Her samler jeg informasjon om de ulike jobbene jeg har hatt.
                            Velg fra menyen til venstre for å lese mer om hvert prosjekt.
                        </p>
                    </>
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
}