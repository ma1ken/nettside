import "../../Styles/Pages.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Sidebar.css";

export default function EducationLayout() {
    const location = useLocation();
    const onMainPage = location.pathname === "/Education";

    return (
        <div className="layout-container">
            <aside className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/Education/Bachelor">Bachelor</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Education/MakeupDegree">Makeup Degree</NavLink>
                    </li>
                </ul>
            </aside>

            <main className="content">
                {onMainPage ? (
                    <>
                        <h1>Education</h1>
                        <p>
                            Her kan du finne informasjon om min utdanning og de ulike kursene
                            jeg har tatt. Velg et emne fra menyen til venstre for mer detaljer.
                        </p>
                    </>
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
}

