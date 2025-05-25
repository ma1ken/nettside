import "../../Styles/Pages.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../Styles/Cards.css"; // 

export default function EducationLayout() {
    const location = useLocation();
    const onMainPage = location.pathname === "/Education";

    return (
        <div className="layout-container">
            <main className="content">
                {onMainPage ? (
                    <>
                        <h1>Education</h1>
                        <p>
                            Her kan du finne informasjon om min utdanning og de ulike kursene
                            jeg har tatt. Klikk på et kort under for mer detaljer.
                        </p>

                        <div className="cards-container">
                            <NavLink to="/Education/Bachelor" className="card">
                                <img src="/images/bachelor.jpg" alt="Bachelor" />
                                <h2>Bachelor</h2>
                                <p>En bachelor i design, teknologi eller kommunikasjon.</p>
                            </NavLink>

                            <NavLink to="/Education/MakeupDegree" className="card">
                                <img src="/images/makeup.jpg" alt="Makeup Degree" />
                                <h2>Makeup Degree</h2>
                                <p>Utdanning innen profesjonell skjønnhetsmakeup.</p>
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

