import { NavLink, Outlet } from "react-router-dom";
import "../../Styles/Sidebar.css";

export default function EducationLayout() {
    return (
         <div className="layout-container">
                    {/* Her bygger jeg på sidebaren og kobler til lenkene jeg begynte å legge inn for sidebar i app.jsx */}
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
                        <h1>Earlier Jobs</h1>
                        <p>
                            Her skal jeg samle litt mer informasjon om ulike yrker jeg
                            har jobbet i, om erfaringen jeg har fått. På venstre side
                            vil det dukke opp en bar på venstre side der man kan
                            filtrere de ulike yrkene.
                        </p>
                        <Outlet />
                    </main>
                </div>
    );
}
