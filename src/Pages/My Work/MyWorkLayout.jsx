import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Pages.css";
import "../../Styles/Cards.css"; // Bruk samme kortdesign her

export default function MyWorkLayout() {
    const location = useLocation();
    const onMainPage = location.pathname === "/MyWork";

    return (
        <div className="layout-container">
            <main className="content">
                {onMainPage ? (
                    <>
                        <h1>Mine Prosjekter</h1>
                        <p>
                            Her finner du informasjon om mine tidligere prosjekter.
                            Klikk på et kort under for å lese mer om hvert prosjekt.
                        </p>

                        <div className="cards-container">
                            <NavLink to="/MyWork/UInMunch" className="card">
                                <img src="/images/uinmunch.jpg" alt="UInMunch" />
                                <h2>UInMunch</h2>
                                <p>Et prosjekt med fokus på brukergrensesnitt inspirert av Munch.</p>
                            </NavLink>

                            <NavLink to="/MyWork/Eld" className="card">
                                <img src="/images/eld.jpg" alt="Eld" />
                                <h2>Eld</h2>
                                <p>Exam in the subject "Designproject".</p>
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

