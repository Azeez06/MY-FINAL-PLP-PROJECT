import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import CoverLetterBuilder from "./pages/CoverLetterBuilder";
import SOPBuilder from "./pages/SOPBuilder";
import JobAlerts from "./pages/JobAlerts";
import PortfolioBuilder from "./pages/PortfolioBuilder";
import Settings from "./pages/Settings";


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume" element={<ResumeBuilder />} />
      <Route path="/cover-letter" element={<CoverLetterBuilder />} />
      <Route path="/sop" element={<SOPBuilder />} />
      <Route path="/job-alerts" element={<JobAlerts />} />
      <Route path="/portfolio" element={<PortfolioBuilder />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default AppRouter;
