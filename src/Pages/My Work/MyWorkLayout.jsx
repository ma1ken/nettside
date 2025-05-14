import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Sidebar.css";
import "../../Styles/Pages.css";

export default function MyWorkLayout() {
    const location = useLocation();
    const onMainPage = location.pathname === "/MyWork";

    return (
        <div className="layout-container">
            <aside className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/MyWork/UInMunch">UinMunch</NavLink>
                    </li>
                    <li>
                        <NavLink to="/MyWork/Eld">Fredrik og Louisa</NavLink>
                    </li>
                </ul>
            </aside>

            <main className="content">
                {onMainPage ? (
                    <>
                        <h1>Mine Prosjekter</h1>
                        <p>
                            Her finner du informasjon om mine tidligere prosjekter.
                            Bruk menyen til venstre for å klikke deg videre.
                        </p>
                    </>
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
}
