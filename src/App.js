import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import EarlierJobs from "./Pages/EarlierJobs";
import Education from "./Pages/Education";
import AboutMe from "./Pages/AboutMe";
import MyWork from "./Pages/MyWork";
import { Route, Routes } from "react-router-dom";

function App() {    
    return (
        <>
            <Navbar />
            {/* <Header /> */}
            <div className="container">
                <Routes>
                    {/* <Route path="/Home" element={<Home />} /> */}
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/EarlierJobs" element={<EarlierJobs />} />
                    <Route path="/Education" element={<Education />} />
                    <Route path="/Mywork" element={<MyWork />} />
                    
                </Routes>
            </div>
        </>
    );
}

export default App;
