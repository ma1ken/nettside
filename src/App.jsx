import "./Styles/App.css";
import Navbar from "./components/Navbar/Navbar";

import EarlierJobsLayout from "./Pages/Earlier Jobs/EarlierJobsLayout";
import IkeaPage from "./Pages/Earlier Jobs/IkeaPage";
import FredrikLouisaPage from "./Pages/Earlier Jobs/FredrikLouisaPage";

import Education from "./Pages/Main Pages/Education";
import AboutMe from "./Pages/Main Pages/AboutMe";

import MyWorkLayout from "./Pages/My Work/MyWorkLayout";  // Importer MyWorkLayout
import EldPage from "./Pages/My Work/EldPage";
import UInMunchPage from "./Pages/My Work/UInMunchPage";

import Home from "./Pages/Main Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    {/* Her routen og dataen fra navigasjonsbaren på toppen som er synlig på alle sider. */}
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/EarlierJobs" element={<EarlierJobsLayout />} />
                    <Route path="/Education" element={<Education />} />
                    
                    {/* Her kommer flere sidebarer som endrer seg ut fra hva man velger i navigasjonsbaren over */}
                    {/* MY WORK SIDEBAR */}
                    <Route
                        path="/MyWork/*"
                        element={<MyWorkLayout />} 
                    >
                        <Route path="UInMunch" element={<UInMunchPage />} />
                        <Route path="Eld" element={<EldPage />} />
                    </Route>

                    {/* EARLIER JOBS SIDEBAR */}
                    <Route
                        path="/EarlierJobs/*"
                        element={<EarlierJobsLayout />}
                    >
                        <Route path="Ikea" element={<IkeaPage />} />
                        <Route path="FredrikLouisa" element={<FredrikLouisaPage />} />
                    </Route>

                    {/* Fallback Route */}
                    <Route path="*" element={<div>Page not found</div>} />
                </Routes>
            </div>
        </>
    );
}

export default App;