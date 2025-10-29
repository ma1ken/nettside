import Navbar from "./components/Navbar/Navbar";

import EarlierJobsLayout from "./Pages/Earlier Jobs/EarlierJobsLayout";
import IkeaPage from "./Pages/Earlier Jobs/IkeaPage";
import FredrikLouisaPage from "./Pages/Earlier Jobs/FredrikLouisaPage";
import BodyShopPage from "./Pages/Earlier Jobs/BodyShopPage";

import EducationLayout from "./Pages/Education/EducationLayout";
import BachelorPage from "./Pages/Education/BachelorPage";
import MakeupDegreePage from "./Pages/Education/MakeupDegreePage";

import MyWorkLayout from "./Pages/My Work/MyWorkLayout"; // Importer MyWorkLayout
import EldPage from "./Pages/My Work/EldPage";
import UInMunchPage from "./Pages/My Work/UInMunchPage";
import AnimationsPage from "./Pages/My Work/AnimationsPage";
import CafePage from "./Pages/My Work/CafePage";

import GamingPage from "./Pages/About Me/GamingPage";
import AboutMeLayout from "./Pages/About Me/AboutMeLayout";
import PlansPage from "./Pages/About Me/PlansPage";

// import HomeLayout from "./Pages/Home/HomeLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Her routen og dataen fra navigasjonsbaren på toppen som er synlig på alle sider. */}
          {/* <Route path="/" element={<HomeLayout />} /> */}
          <Route path="/" element={<AboutMeLayout />} />
          <Route path="/EarlierJobs" element={<EarlierJobsLayout />} />
          <Route path="/Education" element={<EducationLayout />} />
          <Route path="/MyWork" element={<MyWorkLayout />} />

          {/* Her kommer flere sidebarer som endrer seg ut fra hva man velger i navigasjonsbaren over */}

          {/*ABOUT ME SIDEBAR/CARDS */}
          <Route path="/AboutMe" element={<AboutMeLayout />} />
          <Route path="/AboutMe/Gaming" element={<GamingPage />} />
          <Route path="/AboutMe/Plans" element={<PlansPage />} />

          {/* MY WORK SIDEBAR */}
          <Route path="/MyWork/*" element={<MyWorkLayout />}>
            <Route path="UInMunch" element={<UInMunchPage />} />
            <Route path="Eld" element={<EldPage />} />
            <Route path="Animations" element={<AnimationsPage />} />
            <Route path="Cafe" element={<CafePage />} />
          </Route>

          {/* EARLIER JOBS SIDEBAR */}
          <Route path="/EarlierJobs/*" element={<EarlierJobsLayout />}>
            <Route path="Ikea" element={<IkeaPage />} />
            <Route path="FredrikLouisa" element={<FredrikLouisaPage />} />
            <Route path="thebodyshop" element={<BodyShopPage />} />
          </Route>

          {/* EDUCATION SIDEBAR */}
          <Route path="/Education/*" element={<EducationLayout />}>
            <Route path="Bachelor" element={<BachelorPage />} />
            <Route path="MakeupDegree" element={<MakeupDegreePage />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </>
  );
}

// test

export default App;
