import "./App.css";
import Landingpage from "./components/landingpage";
import Empsignup from "./components/empsignup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Empsignin from "./components/signin/empsignin";
import Mainsignin from "./components/signin/mainsignin";
import DashboardTemplate from "./components/employee/dashboard_template";
import TargetUpdates from "./components/employee/target_updates";
import PmsUpdate from "./components/employee/pms_update";
import TaskGuidelines from "./components/employee/task_guidelines";
import GuidelinesTemplate from "./components/employee/guidelines_template";
import PersonalDetails from "./components/employee/personal_details";
import { ThemeProvider } from "./components/employee/ThemeContext";
import Hodsignin from "./components/signin/hodsignin";
import DashboardTemplateHOD from "./components/HOD/dashboard_template-hod";
import TargetUpdatesHOD from "./components/HOD/target_updates-hod";
import PmsUpdateHOD from "./components/HOD/pms_update-hod";
import TaskGuidelinesHOD from "./components/HOD/task_guidelines-hod";
import PersonalDetailsHOD from "./components/HOD/personal_details-hod";
import GuidelinesTemplateHOD from "./components/HOD/guidelines_template-hod";
import Principal from "./components/signin/principal";
import DashboardTemplateP from "./components/Principal/dashboard_template-p";
import TargetUpdatesP from "./components/Principal/target_updates-p";
import PmsUpdateP from "./components/Principal/pms_update-p";
import TaskGuidelinesP from "./components/Principal/task_guidelines-p";
import GuidelinesTemplateP from "./components/Principal/guidelines_template-p";
import PersonalDetailsP from "./components/Principal/personal_details-p";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/empsignup" element={<Empsignup />} />
        {/* <Route path="/empsignin" element={<Empsignin />} /> */}
        <Route path="/mainsignin" element={<Mainsignin />} />
        <Route path="/hodsignin" element={<Hodsignin />} />
        <Route path="/principalsignin" element={<Principal />} />
        <Route path="/dashboard_template" element={<DashboardTemplate />} />
        <Route
          path="/dashboard_template-hod"
          element={<DashboardTemplateHOD />}
        />
        <Route path="/dashboard_template-p" element={<DashboardTemplateP />} />
        <Route path="/target_updates" element={<TargetUpdates />} />
        <Route path="/target_updates-hod" element={<TargetUpdatesHOD />} />
        <Route path="/target_updates-p" element={<TargetUpdatesP />} />
        <Route path="/pms_update" element={<PmsUpdate />} />
        <Route path="/pms_update-hod" element={<PmsUpdateHOD />} />
        <Route path="/pms_update-p" element={<PmsUpdateP />} />
        <Route path="/task_guidelines" element={<TaskGuidelines />} />
        <Route path="/task_guidelines-hod" element={<TaskGuidelinesHOD />} />
        <Route path="/task_guidelines-p" element={<TaskGuidelinesP />} />
        <Route path="/guidelines_template" element={<GuidelinesTemplate />} />
        <Route
          path="/guidelines_template-hod"
          element={<GuidelinesTemplateHOD />}
        />
        <Route
          path="/guidelines_template-p"
          element={<GuidelinesTemplateP />}
        />
        <Route path="/personal_details" element={<PersonalDetails />} />
        <Route path="/personal_details-hod" element={<PersonalDetailsHOD />} />
        <Route path="/personal_details-p" element={<PersonalDetailsP />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
