import "./App.css";
import Landingpage from "./components/landingpage";
import Empsignup from "./components/empsignup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Empsignin from "./components/signin/empsignin";
import Mainsignin from "./components/signin/mainsignin";
import DashboardTemplate from "./components/main_screens/dashboard_template";
import TargetUpdates from "./components/main_screens/target_updates";
import PmsUpdate from "./components/main_screens/pms_update";
import TaskGuidelines from "./components/main_screens/task_guidelines";
import GuidelinesTemplate from "./components/main_screens/guidelines_template";
import PersonalDetails from "./components/main_screens/personal_details";
import { ThemeProvider } from "./components/main_screens/ThemeContext";
import Hodsignin from "./components/signin/hodsignin";
import DashboardTemplateHOD from "./components/HOD/dashboard_template-hod";
import TargetUpdatesHOD from "./components/HOD/target_updates-hod";
import PmsUpdateHOD from "./components/HOD/pms_update-hod";
import TaskGuidelinesHOD from "./components/HOD/task_guidelines-hod";
import PersonalDetailsHOD from "./components/HOD/personal_details-hod";
import GuidelinesTemplateHOD from "./components/HOD/guidelines_template-hod";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/empsignup" element={<Empsignup />} />
        <Route path="/empsignin" element={<Empsignin />} />
        <Route path="/mainsignin" element={<Mainsignin />} />
        <Route path="/hodsignin" element={<Hodsignin />} />
        <Route path="/dashboard_template" element={<DashboardTemplate />} />
        <Route
          path="/dashboard_template-hod"
          element={<DashboardTemplateHOD />}
        />
        <Route path="/target_updates" element={<TargetUpdates />} />
        <Route path="/target_updates-hod" element={<TargetUpdatesHOD />} />
        <Route path="/pms_update" element={<PmsUpdate />} />
        <Route path="/pms_update-hod" element={<PmsUpdateHOD />} />
        <Route path="/task_guidelines" element={<TaskGuidelines />} />
        <Route path="/task_guidelines-hod" element={<TaskGuidelinesHOD />} />
        <Route path="/guidelines_template" element={<GuidelinesTemplate />} />
        <Route
          path="/guidelines_template-hod"
          element={<GuidelinesTemplateHOD />}
        />
        <Route path="/personal_details" element={<PersonalDetails />} />
        <Route path="/personal_details-hod" element={<PersonalDetailsHOD />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
